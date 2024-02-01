const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
//ambil item nama
let  = localStorage("");
//ambil item desc
let  = localStorage("");
//perintahkan document untuk mengambil id info dan isi variabel untuk menampilkan nama dan desc!
document.getElementById(
  ""
). = `anda telah memesan ${}: ${}`;
//ambil item total
let total = localStorage.getItem("total");
//ubah element yang id nya total!
//isi parseInt()!
document.getElementById("total") = formatUang(parseInt());
let saldo = 50000;
//ubah element yang id nya saldo!
document.getElementById("saldo") = formatUang(saldo);
const  = () => {
  //mengambil resto-pay dan cash yang berbentuk input type radio, lalu ambil valuenya(true/false)
  let  = document.getElementById("resto-pay");
  let  = document.getElementById("cash");

  // Cek jika tidak memilih metode

  //jika memilih resto

  //jika saldo tidak cukup

  //munculkan konfirmasi dan bungkus atau tampung pakai variabel
  //jika konfirmasi bersifat true atau ditekan/dipencet "ok"

  //munculkan prompt topup dan bungkus atau tampung menggunakan variabel
  //jika topup kelipatan 10000

  //tambahkan dengan saldo dan munculkan saldo terbaru
  //tambahkan keterangan jika kelipatan tidak 10000

  //masuk ke halaman sukses
  //simpan saldo dalam localstorage

  //jika memilih cash

  //masukan ke halaman cash  
};
