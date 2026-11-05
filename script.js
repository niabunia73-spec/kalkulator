// Mengambil elemen display dari HTML
const display = document.getElementById('display');

// Menambahkan angka atau operator ke layar
function appendToDisplay(input) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += input;
}

// Menghapus seluruh tampilan layar (Clear)
function clearDisplay() {
    display.value = '';
}

// Menghapus karakter terakhir (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil matematika yang ada di layar
function calculateResult() {
    try {
        // Menggunakan fungsi eval() untuk memproses string matematika secara otomatis
        // eval aman digunakan untuk kalkulator sederhana tanpa input teks bebas dari user
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (error) {
        // Jika format matematika salah (misal: "++" atau "5/*2")
        display.value = 'Error';
    }
}
