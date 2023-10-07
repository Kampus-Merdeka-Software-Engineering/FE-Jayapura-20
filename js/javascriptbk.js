
      var asal = document.getElementById("asal");
      var tujuan = document.getElementById("tujuan");
      var jumlah = document.getElementById("jumlah");
      var btn = document.querySelector(".btn");
      var data = document.getElementById("data");

      var menu = document.querySelector(".menu");
      var topnav = document.querySelector(".topnav-right");

      menu.addEventListener("click", function () {
        topnav.classList.toggle("act");
        menu.classList.toggle("act");
      });

      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      var harga = [
        {
          asal: "Jawa",
          harga: 10000,
        },
        {
          asal: "Sumatra",
          harga: 13000,
        },
        {
          asal: "Kalimantan",
          harga: 16000,
        },
        {
          asal: "Sulawesi",
          harga: 19000,
        },
        {
          asal: "Papua",
          harga: 22000,
        },
      ];

      btn.addEventListener("click", function () {
        if (asal.value == "") {
          alert("Kota asal belum dipilih");
        } else if (tujuan.value == "") {
          alert("Kota tujuan belum dipilih");
        } else if (jumlah.value == "") {
          alert("Berat belum diisi");
        } else {
          var ongkir = 0;
          var asalTable = "";
          harga.filter(function (item) {
            if (item.asal.toUpperCase() == asal.value.toUpperCase()) {
              ongkir = item.harga * jumlah.value;
              asalTable = item.asal;
            }
          });

          const tujuanLow = tujuan.value.toLowerCase();
          const tujuanAwal = tujuanLow.charAt(0);
          const tujuanAwalCap = tujuanAwal.toUpperCase();
          const tujuanRemain = tujuanLow.slice(1);
          const tujuanCapital = tujuanAwalCap + tujuanRemain;

          data.innerHTML += `<tr>
			<td>Reguler</td>
			<td>${asalTable}</td>
		  	<td>${tujuanCapital}</td>
		  	<td>${jumlah.value} kg</td>
		  	<td>${formatter.format(ongkir)}</td>
			</tr>`;
        }
      });
  