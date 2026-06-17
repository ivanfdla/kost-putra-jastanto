# Panduan Deploy Website ke GitHub Pages 🚀

Website Kost Putra Jastanto Anda sudah sepenuhnya siap untuk dideploy (di-online-kan) secara gratis menggunakan GitHub Pages.

Semua konfigurasi teknis telah saya siapkan (termasuk pemasangan library `gh-pages` dan penambahan *script* deploy di `package.json`).

Silakan ikuti langkah-langkah mudah berikut ini:

## Langkah 1: Buat Repository di GitHub
1. Buka browser dan login ke [GitHub](https://github.com/).
2. Buat repository baru (klik tanda **+** di pojok kanan atas -> **New repository**).
3. Beri nama repository Anda, misalnya: `kost-putra-jastanto`.
4. Pastikan diset ke **Public**.
5. Jangan centang "Add a README file" atau pengaturan lainnya, langsung klik **Create repository**.

## Langkah 2: Hubungkan Kode Lokal Anda ke GitHub
Jika proyek di komputer Anda belum terhubung dengan repository GitHub tersebut, jalankan perintah-perintah ini di **Terminal (Command Prompt/PowerShell)** di dalam folder proyek Anda:

```bash
git init
git add .
git commit -m "First commit: Kost Putra Jastanto website"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/kost-putra-jastanto.git
git push -u origin main
```
*(Catatan: Ganti `USERNAME_ANDA` dan `kost-putra-jastanto` dengan username dan nama repository Anda).*

> [!WARNING]
> Pastikan Anda sudah login Git di komputer Anda sebelum melakukan perintah push di atas.

## Langkah 3: Sesuaikan File vite.config.js (Opsional tapi Penting)
Jika Anda menggunakan *Project Pages* (URL berformat `https://username.github.io/nama-repo/`), buka file `vite.config.js` dan pastikan konfigurasi `base` mengarah ke nama repository Anda.

Contoh:
```javascript
export default defineConfig({
  base: '/kost-putra-jastanto/', // <-- Sesuaikan dengan nama repo Anda
  plugins: [react(), tailwindcss()],
})
```

## Langkah 4: Jalankan Perintah Deploy!
Cukup ketik perintah ajaib ini di Terminal Anda:

```bash
npm run deploy
```

**Apa yang terjadi?**
Script ini akan otomatis membuat versi *production* (ukuran kecil & cepat) dari website Anda, lalu mengunggahnya ke branch khusus bernama `gh-pages` di GitHub.

## Langkah 5: Aktifkan GitHub Pages
1. Kembali ke halaman repository Anda di website GitHub.
2. Pergi ke tab **Settings**.
3. Di menu sebelah kiri, klik **Pages**.
4. Di bagian **Build and deployment**, pastikan *Source* diset ke **Deploy from a branch**.
5. Di bagian *Branch*, pilih **gh-pages** dari dropdown, dan folder diset ke **/(root)**.
6. Klik **Save**.

Tunggu sekitar 1-2 menit, lalu _refresh_ halamannya. GitHub akan memberikan link website live Anda di bagian paling atas (contoh: `https://username.github.io/kost-putra-jastanto/`).

Selamat! Website Kost Putra Jastanto sudah online dan siap dibagikan ke para calon penghuni! 🎉
