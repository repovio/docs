---
title: 'Panduan pengguna Repovio'
description:
  'Mulai gunakan Repovio untuk melihat repositori, status alur kerja, dan tindakan persetujuan yang diperlukan.'
---

Repovio adalah dasbor status alur kerja hanya-baca. Ini memungkinkan pengguna yang berwenang memeriksa aktivitas
repositori tanpa membuat, menjalankan ulang, menyetujui, atau menghapus apa pun di GitHub, GitLab, Forgejo, atau Gitea.

<a id="before-you-begin"></a>

## Sebelum Anda mulai

Anda memerlukan URL instalasi Repovio dan akun OIDC lokal atau yang dikonfigurasi. Administrator pertama menyelesaikan
pengaturan satu kali; pengguna lokal tambahan disediakan melalui API yang dilindungi, atau pengguna masuk melalui OIDC
yang dikonfigurasi. Akses ke data penyedia bergantung pada peran dan keanggotaan repositori Anda; masuk tidak secara
otomatis mengekspos setiap repositori yang dikonfigurasi.

Repovio menggunakan tiga peran aplikasi:

- **Viewer** dapat memeriksa repositori, alur kerja, masalah, dan permintaan penarikan yang ditetapkan secara eksplisit.
- **Manajer** memiliki akses baca dan dapat memeriksa peringatan keamanan untuk repositori yang keanggotaannya
  juga**Manajer**. Saluran notifikasi, langganan, tes, dan riwayat dikelola secara global oleh administrator sistem.
- **Administrator Sistem** dapat mengakses setiap repositori dan mengelola akun penyedia, repositori, keanggotaan,
  pengguna, token MCP, dan default aplikasi.

Peran aplikasi tidak pernah memberikan akses tulis di GitHub, GitLab, Forgejo, atau Gitea. Jika suatu tindakan mengubah
status penyedia, Repovio akan membuka antarmuka penyedia alih-alih melakukan tindakan tersebut.

<a id="recommended-first-session"></a>

## Direkomendasikan sesi pertama

1. [Masuk](/docs/next/sign-in), pelajari [navigasi](/docs/next/navigation), dan coba [mencari](/docs/next/search).
2. Tinjau [Dasbor](/docs/next/guide-dashboard), [Semua eksekusi](/docs/next/workflow-runs),
   [Perlu perhatian](/docs/next/needs-attention), dan [Menunggu persetujuan](/docs/next/awaiting-approval).
3. Periksa [Masalah](/docs/next/guide-issues) dan [Permintaan penggabungan](/docs/next/guide-pull-requests).
4. Buka [Repositori](/docs/next/repositories) untuk memahami data yang Anda lihat.
5. Administrator mengkonfigurasi [saluran notifikasi](/docs/next/notifications) dan
   [langganan acara](/docs/next/notification-rules).

Administrator sistem kemudian harus melanjutkan dengan [Administrasi dan pengaturan](/docs/next/provider-accounts).
Penerapan, pendaftaran penyedia, penyiapan webhook, pencadangan, dan pemulihan ditautkan dari halaman buku panduan
terkait.

<a id="when-a-page-is-empty-or-unavailable"></a>

## Ketika halaman kosong atau tidak tersedia

Halaman kosong dapat berarti bahwa tidak ada data penyedia yang cocok yang telah disinkronkan, filter mengecualikan
semua hasil, atau akun Anda tidak memiliki keanggotaan untuk repositori. Hapus filter aktif dan periksa pilihan
repositori terlebih dahulu. Pesan kesalahan pemuatan berarti data yang diminta tidak dapat diambil; coba lagi tindakan
halaman dan minta administrator instalasi untuk memeriksa pekerjaan API dan sinkronisasi jika kesalahan terus berlanjut.
