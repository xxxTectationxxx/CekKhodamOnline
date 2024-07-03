function cekKhodam(event) {
  event.preventDefault();
  let userInput = $("#search").val();
  let nama = $("<div>").text(userInput).html();
  if (nama == "") {
    alert("Nama tidak boleh kosong!");
  } else {
    let status = ["isi", "kosong"];

    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus == 0) {
      let namaKhodam = [
        "Kucing Terbang",
        "Kera Sakti",
        "Naga Kecil",
        "Burung Ajaib",
        "Kelinci Berlari",
        "Kuda Berbulu Emas",
        "Gajah Mini",
        "Bebek Berdasi",
        "Tikus Pintar",
        "Ayam Bergitar",
        "Sapi Terbang",
        "Kambing Bersepatu",
        "Harimau Kecil",
        "Kupu-Kupu Raksasa",
        "Domba Berjubah",
        "Ular Menari",
        "Katak Penyihir",
        "Ikan Pelangi",
        "Kuda Laut Berkilau",
        "Badak Kecil",
        "Banteng Bermahkota",
        "Kucing Bersepeda",
        "Bebek Berenang",
        "Burung Merpati",
        "Kuda Unicorn",
        "Rubah Cerdik",
        "Babi Berbulu Emas",
        "Kucing Ninja",
        "Burung Hantu Bijak",
        "Kuda Poni",
        "Gajah Berpesta",
        "Harimau Terbang",
        "Katak Berpesta",
        "Ikan Emas",
        "Burung Kakatua",
        "Bebek Berpesta",
        "Kuda Bersepatu",
        "Tikus Terbang",
        "Sapi Bernyanyi",
        "Kuda Lari",
        "Domba Bernyanyi",
        "Ayam Menari",
        "Naga Lucu",
        "Kelinci Terbang",
        "Kucing Berlari",
        "Harimau Berpesta",
        "Kuda Terbang",
        "Gajah Menari",
        "Tikus Bernyanyi",
        "Kelinci Berpesta",
        "Naga Bernyanyi",
        "Bebek Terbang",
        "Burung Menari",
        "Kucing Bernyanyi",
        "Kuda Berpesta",
        "Gajah Terbang",
        "Harimau Menari",
        "Tikus Terbang",
        "Bebek Menari",
        "Ayam Terbang",
        "Naga Berlari",
        "Kelinci Bernyanyi",
        "Kucing Berpesta",
        "Burung Terbang",
        "Kuda Menari",
        "Gajah Bernyanyi",
        "Tikus Berpesta",
        "Kelinci Menari",
        "Bebek Bernyanyi",
        "Naga Terbang",
        "Kucing Menari",
        "Harimau Bernyanyi",
        "Kuda Berlari",
        "Burung Bernyanyi",
        "Kelinci Terbang",
        "Tikus Menari",
        "Gajah Berlari",
        "Ayam Bernyanyi",
        "Kuda Kecil",
        "Burung Menyanyi",
        "Naga Menari",
        "Harimau Terbang",
        "Kelinci Berlari",
        "Tikus Bernyanyi",
        "Gajah Menari",
        "Ayam Menyanyi",
        "Kuda Terbang",
        "Burung Bernyanyi",
        "Naga Berpesta",
        "Harimau Menyanyi",
        "Kelinci Terbang",
        "Tikus Menyanyi",
        "Gajah Berpesta",
        "Ayam Berpesta",
        "Kuda Bernyanyi",
        "Burung Terbang",
        "Naga Bernyanyi",
        "Harimau Berpesta",
        "Kelinci Bernyanyi",
        "Gajah Bersepeda",
      ];

      const randomKhodam = Math.floor(Math.random() * namaKhodam.length);
      $("#result").html(
        `${nama.toUpperCase()} - Khodam Kamu adalah ${namaKhodam[randomKhodam]}`
      );
      $("#search").val("");
    } else {
      $("#result").html(`${nama.toUpperCase()} - KOSONG`);
      $("#search").val("");
    }
  }
}

$(document).ready(function () {
  $("#btn-search").click(cekKhodam);
});
