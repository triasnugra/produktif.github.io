// Hari, Tanggal, & Jam

function getHari() {
  var hari = new Date().getDay();
  var hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return hariIndonesia[hari];
}

function getTanggal() {
  var tanggal = new Date().getDate();
  return tanggal;
}

function getJam() {
  var jam = new Date().getHours();
  var menit = new Date().getMinutes();
  var detik = new Date().getSeconds();
  return jam + ":" + menit + ":" + detik;
}

// Countdown sisa hari di setiap bulannya

function getCountdownSisaHariBulan() {
  var tanggal = new Date();
  var bulan = tanggal.getMonth();
  var hari = tanggal.getDate();
  var akhirBulan = new Date(tanggal.getFullYear(), bulan + 1, 0
