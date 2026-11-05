# Repovio documentation

<img src="branding/logo.svg" width="64" height="64" alt="Repovio" />

Public English and German documentation sources for https://repovio.de.

Edit `<locale>/docs/<version>/<slug>.md`. English is the editorial reference. Every page requires title and description
frontmatter. Update both languages together and preserve executable examples and technical identifiers.

The [feature coverage matrix](COVERAGE.md) maps the complete handbook to both reviewed application versions.
`navigation.json` defines explicit tab, section, subgroup, and order metadata, plus legacy-page redirects. Never
classify pages by their position in a version slug list. `locales.json` is the locale registry shared with the website
consumer. Stable heading anchors are identical across translations.

`versions.json` records exact application revisions, released page sets and the stable version. `next` is an internal
editorial source, excluded from website routes, search, assets and indexing. The initial historical snapshot comes from
application release 1.0.1; its original Git tag is recorded by exact commit rather than renamed or recreated. Product
labels are normalized; archived deployments must use configuration and image references from their tagged source.

The private website consumes this repository as a pinned Git submodule. Commit reviewed docs before updating the website
pin. Release promotion validates exact application and documentation revisions, creates immutable minor archives and
records publication identity. Historical pages do not automatically acquire new functionality.

Screenshots are published only with matching source provenance. Existing screenshots without capture provenance are not
reused as evidence for a release. See the private website deployment guide for capture and promotion configuration.

## Contributing

Report documentation problems through this repository's issue forms. Do not include tokens, private repository data or
other credentials. Report vulnerabilities using the security policy. Support development at
https://buymeacoffee.com/tobiaswaelde.
