
let sayi = Number(prompt("Lutfen bir sayi giriniz."));
let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        sonuc = false;
        break;
    }
}
if (sonuc == true) {
    alert("Sayi asal")
}
else {
    alert("Sayi asal degildir.");
}