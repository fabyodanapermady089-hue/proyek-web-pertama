// Mengambil elemen input slider
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

// Mengambil elemen teks value angka
const redVal = document.getElementById('val-red');
const greenVal = document.getElementById('val-green');
const blueVal = document.getElementById('val-blue');

// Mengambil elemen preview dan tombol
const colorPreview = document.getElementById('color-preview');
const rgbText = document.getElementById('rgb-text');
const resetBtn = document.getElementById('reset-btn');

// Fungsi utama untuk mengupdate warna
function updateWarna() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    // Update teks angka di atas slider
    redVal.innerText = r;
    greenVal.innerText = g;
    blueVal.innerText = b;

    // Campurkan warna dan pasang ke background preview
    const warnaCampuran = `rgb(${r}, ${g}, ${b})`;
    colorPreview.style.backgroundColor = warnaCampuran;
    
    // Tampilkan kode RGB-nya
    rgbText.innerText = warnaCampuran;
}

// Menghubungkan fungsi ke event input slider (dijalankan tiap kali digeser)
redSlider.addEventListener('input', updateWarna);
greenSlider.addEventListener('input', updateWarna);
blueSlider.addEventListener('input', updateWarna);

// Fungsi untuk tombol Reset balik ke warna gelap semula
resetBtn.addEventListener('click', () => {
    redSlider.value = 15;
    greenSlider.value = 23;
    blueSlider.value = 42;
    updateWarna();
});
