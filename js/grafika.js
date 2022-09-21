function wszystko(){
  let wszystko = document.getElementById("wszystko");
  let logo = document.getElementById("logo");
  let baner = document.getElementById("baner");
  let overlay = document.getElementById("overlay");
  wszystko.style.backgroundColor="#4caf50";
  logo.style.backgroundColor="#cd7032";
  baner.style.backgroundColor="#cd7032";
  overlay.style.backgroundColor="#cd7032";
  let loga = document.getElementsByClassName("logo");
  let banery = document.getElementsByClassName("baner");
  let overlaye = document.getElementsByClassName("overlay");
  for (let i = 0; i < loga.length; i++) {
    loga[i].style.display = "block";
  }
  for (let i = 0; i < banery.length; i++) {
    banery[i].style.display = "block";
  }
  for (let i = 0; i < overlaye.length; i++) {
    overlaye[i].style.display = "block";
  }

}
function logo(){
  let wszystko = document.getElementById("wszystko");
  let logo = document.getElementById("logo");
  let baner = document.getElementById("baner");
  let overlay = document.getElementById("overlay");
  wszystko.style.backgroundColor="#cd7032";
  logo.style.backgroundColor="#4caf50";
  baner.style.backgroundColor="#cd7032";
  overlay.style.backgroundColor="#cd7032";
  let loga = document.getElementsByClassName("logo");
  let banery = document.getElementsByClassName("baner");
  let overlaye = document.getElementsByClassName("overlay");
  for (let i = 0; i < loga.length; i++) {
    loga[i].style.display = "block";
  }
  for (let i = 0; i < banery.length; i++) {
    banery[i].style.display = "none";
  }
  for (let i = 0; i < overlaye.length; i++) {
    overlaye[i].style.display = "none";
  }
}
function baner(){
  let wszystko = document.getElementById("wszystko");
  let logo = document.getElementById("logo");
  let baner = document.getElementById("baner");
  let overlay = document.getElementById("overlay");
  wszystko.style.backgroundColor="#cd7032";
  logo.style.backgroundColor="#cd7032";
  baner.style.backgroundColor="#4caf50";
  overlay.style.backgroundColor="#cd7032";
  let loga = document.getElementsByClassName("logo");
  let banery = document.getElementsByClassName("baner");
  let overlaye = document.getElementsByClassName("overlay");
  for (let i = 0; i < loga.length; i++) {
    loga[i].style.display = "none";
  }
  for (let i = 0; i < banery.length; i++) {
    banery[i].style.display = "block";
  }
  for (let i = 0; i < overlaye.length; i++) {
    overlaye[i].style.display = "none";
  }
}
function overlay(){
  let wszystko = document.getElementById("wszystko");
  let logo = document.getElementById("logo");
  let baner = document.getElementById("baner");
  let overlay = document.getElementById("overlay");
  wszystko.style.backgroundColor="#cd7032";
  logo.style.backgroundColor="#cd7032";
  baner.style.backgroundColor="#cd7032";
  overlay.style.backgroundColor="#4caf50";
  let loga = document.getElementsByClassName("logo");
  let banery = document.getElementsByClassName("baner");
  let overlaye = document.getElementsByClassName("overlay");
  for (let i = 0; i < loga.length; i++) {
    loga[i].style.display = "none";
  }
  for (let i = 0; i < banery.length; i++) {
    banery[i].style.display = "none";
  }
  for (let i = 0; i < overlaye.length; i++) {
    overlaye[i].style.display = "block";
  }
}


function powiekszenie(obraz){
  const zdjecie = document.createElement("img");
  zdjecie.id="powiekszenie";
  zdjecie.src=obraz.src;
  zdjecie.setAttribute("onclick","znikanie()");
  powiekszenieobrazu.appendChild(zdjecie);
  tloobrazu.style.display="block";
  obrazy.style.filter="blur(15px)";
}
function znikanie(){
  powiekszenieobrazu.innerHTML="";
  tloobrazu.style.display="none";
  obrazy.style.filter="blur(0px)";
}
