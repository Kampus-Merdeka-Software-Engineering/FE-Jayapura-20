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

    isSending = true;
    fetch(`http://be-jayapura-20-production.up.railway.app/review`, {
        method: "POST",
        body: formData // Menggunakan formData
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)        
        const list = document.getElementById("review"); 
        list.innerHTML += `
                <div class="review-slide">
                    <img class="review-img" src="${gambarValue}" alt="person"/>
                    <div class="review-text">
                        <div class="review-judul">${tampilInput.value}</div>
                        ${pesanInput.value}
                    </div>
                </div>`;    
        tampilInput.value = "";
        gambarInput.value = "";
        pesanInput.value = "";
        showDivs(1);
    })
    .catch(function (error) {
        console.log(error);
    });
}

