import { readFile, access, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

/** Verify version/locale coverage, frontmatter, local links and content-image references. */
export async function checkDocs(root = '.', { assetRoot, previewAssetRoot } = {}) {
  const manifest = JSON.parse(await readFile(resolve(root, 'versions.json'), 'utf8'));
  if (!manifest.versions.some((version) => version.id === manifest.stable && version.status === 'stable'))
    throw new Error('Invalid stable version');
  if (manifest.versions.filter((version) => version.status === 'stable').length !== 1)
    throw new Error('Expected one stable version');
  const errors = [];
  for (const version of manifest.versions) {
    if (!/^[a-f0-9]{40}$/.test(version.revision) || !/^(v\d+\.\d+|next)$/.test(version.id))
      throw new Error('Invalid version provenance');
    for (const locale of ['en', 'de']) {
      const directory = resolve(root, locale, 'docs', version.id);
      const files = (await readdir(directory)).filter((name) => name.endsWith('.md')).sort();
      if (JSON.stringify(files) !== JSON.stringify(version.slugs.map((slug) => slug + '.md').sort()))
        errors.push(`${locale}/${version.id}: page coverage`);
      for (const slug of version.slugs) {
        const text = await readFile(resolve(directory, slug + '.md'), 'utf8');
        if (!/^---\n[\s\S]*?title: .+\n[\s\S]*?description: .+\n[\s\S]*?---/.test(text))
          errors.push(`${locale}/${version.id}/${slug}: frontmatter`);
        if (/\b(?:TODO|TBD)\b/.test(text)) errors.push(`${slug}: unfinished content`);
        for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
          const url = match[1].split('#')[0];
          if (!url || /^(?:https?:|mailto:)/.test(url)) continue;
          if (url.startsWith('/images/')) {
            if (assetRoot) {
              try {
                const image =
                  version.id === 'next' && previewAssetRoot && url.startsWith('/images/docs/next/')
                    ? resolve(previewAssetRoot, url.slice('/images/docs/next/'.length))
                    : resolve(assetRoot, url.slice(1));
                await access(image);
              } catch {
                errors.push(`${slug}: image ${url}`);
              }
            }
            continue;
          }
          const path = url.replace(/^\/(?:en|de)(?=\/)/, '');
          if (path.startsWith('/docs/')) {
            const target = manifest.versions.find((v) => path.startsWith(`/docs/${v.id}/`));
            if (!target || !target.slugs.includes(path.split('/').at(-1))) errors.push(`${slug}: link ${url}`);
          } else errors.push(`${slug}: unresolved link ${url}`);
        }
      }
    }
  }
  if (errors.length) throw new Error(errors.join('\n'));
  return manifest;
}
if (process.argv[1] === new URL(import.meta.url).pathname) {
  const manifest = await checkDocs(process.argv[2]);
  console.log(`Validated ${manifest.versions.length} documentation versions in EN/DE.`);
}
