
var btn = document.getElementById("btnCekdp")
var daerah = document.getElementById("daerah")

btn.addEventListener("click", cekdp);

function cekdp() {
    fetch(`be-jayapura-20-production.up.railway.app/filter?${
        new URLSearchParams({
            kategori: daerah.value
        })
    }`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const list = document.querySelector(".blok")
            list.innerHTML =``;
            for (let i = 0; i < data.length; i++){
                const item = data[i];
                list.innerHTML += `
                <div class="blokdp">
                    <div class="kota">${item.daerah}</div> 
                    <div class="alamat">
                    ${item.alamat}
                    </div>
                    <div class="kota">${item.tipe}</div>
                </div>
                `;
            }
        }).catch(function (error) {
            console.log(error);
        });
}