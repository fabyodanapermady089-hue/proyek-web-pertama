// Mengambil elemen HTML berdasarkan ID
const actionBtn = document.getElementById('action-btn');
const statusBox = document.getElementById('status-box');
const statusText = document.getElementById('status-text');

// Menambahkan fungsi deteksi klik pada tombol
actionBtn.addEventListener('click', () => {
    // Mengecek apakah status saat ini sudah aktif atau belum
    if (statusBox.classList.contains('status-neutral')) {
        // Mengubah ke status aktif
        statusBox.classList.remove('status-neutral');
        statusBox.classList.add('status-active');
        statusText.innerText = 'Sistem Aktif & Live!';
        actionBtn.innerText = 'Matikan Fitur';
    } else {
        // Mengembalikan ke status semula
        statusBox.classList.remove('status-active');
        statusBox.classList.add('status-neutral');
        statusText.innerText = 'Siap';
        actionBtn.innerText = 'Aktifkan Fitur';
    }
});
