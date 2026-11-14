ROJAK MAGIC KIDS STUDIO - Shanum Hiyannuryah
Halaman Shanum : index.html (gambar) dan belajar.html (ngaji, doa, hitung, menulis)   Dasbor Abba : abba.html
1. Upload semua file ke GitHub, aktifkan Settings > Pages.
2. Agar real time antar HP: buat project di console.firebase.google.com > Firestore Database (mode test) > tambah Web App > salin config ke firebase-config.js.
   Di kedua HP isi "Kode keluarga" yang sama (panel 💌).
3. Aturan Firestore (sementara): match /fam/{f}/{c}/{d} { allow read, write: if true; }  -> sebaiknya diperketat nanti.
