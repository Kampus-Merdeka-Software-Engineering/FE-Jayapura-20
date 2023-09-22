//Header Slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("header-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;

  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//Review Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("review-slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}

// Hubungi - Get Data

let tampilan = [];
let gambaran = [];
let perpesan = [];

function addPesan() {
  const tampilInput = document.getElementById("tampil");
  const gambarInput = document.getElementById("img");
  const file = gambarInput.files[0];
  const gambarValue = URL.createObjectURL(file);
  const pesanInput = document.getElementById("pesan");
  const tampilValue = tampilInput.value.trim();

  if (tampilValue) {
    tampilan.push(tampilValue);
    gambaran.push(gambarValue);
    perpesan.push(pesanInput.value);
    renderTampilan();
    tampilInput.value = "";
    gambarInput.value = "";
    pesanInput.value = "";
    showDivs();
  }
}

function renderTampilan() {
  const list = document.getElementById("review");
  list.innerHTML += "";
  tampilan.forEach((tampil, index) => {
    list.innerHTML += `
    <div class="review-slide">
      <img class="review-img" src="${gambaran[index]}" alt="person"/>
      <div class="review-text">
        <div class="review-judul">${tampil}</div>
        ${perpesan[index]}
      </div>
    </div>`;
  });
}
