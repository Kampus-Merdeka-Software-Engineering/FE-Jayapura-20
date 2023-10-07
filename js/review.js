var btn = document.getElementById("kirim");
var isSending = false;
btn.addEventListener("click", addPesan);

function addPesan() {
    var tampilInput = document.getElementById("tampil");
    var gambarInput = document.getElementById("img");
    var file = gambarInput.files[0];
    var gambarValue = URL.createObjectURL(file);
    var pesanInput = document.getElementById("pesan");

    const formData = new FormData();
    formData.append('nama', tampilInput.value);
    formData.append('pesan', pesanInput.value);
    formData.append('image', file); // Menggunakan file langsung

    if (isSending) {
        return; // Jika sedang mengirim, keluar dari fungsi
    }
    isSending = true;
    fetch(`http://localhost:3000/review`, {
        method: "POST",
        body: formData // Menggunakan formData
    })
    .then(function (response) {
        isSending = false;
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        tampilInput.value = "";
        gambarInput.value = "";
        pesanInput.value = "";
        showDivs();
        const list = document.getElementById("review");     
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            list.innerHTML += `
                <div class="review-slide">
                    <img class="review-img" src="${gambarValue}" alt="person"/>
                    <div class="review-text">
                        <div class="review-judul">${item.nama}</div>
                        ${item.pesan}
                    </div>
                </div>`;
        };
    })
    .catch(function (error) {
        console.log(error);
        isSending = false;
    });
}