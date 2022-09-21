function bialetlo() {
  let kolor = document.getElementById('body').style.backgroundColor;
  let przyciski = document.getElementsByClassName("przycisk");
  let czcionka = document.getElementsByTagName("P");
  let link = document.getElementsByTagName("A");
  let bok1 = document.getElementsByClassName("bok1");
  let bok2 = document.getElementsByClassName("bok2");
  let bok3 = document.getElementsByClassName("bok3");
  let bok4 = document.getElementsByClassName("bok4");
  if(kolor=="") {
    document.getElementById('body').style.backgroundColor="white";
    przyciski[0].style.backgroundColor= "white";
    przyciski[0].style.color= "rgb(38, 38, 38)";
    for (let i = 1; i < czcionka.length; i++) {
      czcionka[i].style.color="rgb(38, 38, 38)"
    }
    if (link.length!=37){
      for (let i = 10; i < link.length; i++) {
        link[i].style.color="rgb(38, 38, 38)"
      }
    }
  }
  else if(kolor=="white") {
    document.getElementById('body').style.backgroundColor="rgb(38, 38, 38)";
    przyciski[0].style.backgroundColor= "rgb(38, 38, 38)";
    przyciski[0].style.color= "white";
    for (let i = 1; i < czcionka.length; i++) {
      czcionka[i].style.color="white";
    }
    if (link.length!=37){
      for (let i = 10; i < link.length; i++) {
        link[i].style.color="white";
      }
    }
  }
  else if(kolor=="rgb(38, 38, 38)"){
    document.getElementById('body').style.backgroundColor="white";
    przyciski[0].style.backgroundColor= "white";
    przyciski[0].style.color= "rgb(38, 38, 38)";
    for (let i = 1; i < czcionka.length; i++) {
      czcionka[i].style.color="rgb(38, 38, 38)"
    }
    if (link.length!=37){
      for (let i = 10; i < link.length; i++) {
        link[i].style.color="rgb(38, 38, 38)"
      }
    }
  }
  else {
    document.getElementById('body').style.backgroundColor="rgb(38, 38, 38)";
    przyciski[0].style.backgroundColor= "rgb(38, 38, 38)";
    przyciski[0].style.color= "white";
    for (let i = 1; i < czcionka.length; i++) {
      czcionka[i].style.color="white";
    }
    if (link.length!=37){
      for (let i = 10; i < link.length; i++) {
        link[i].style.color="white";
      }
    }
  }
  for(let i=0; bok1.length; i++){
    bok1[i].style.backgroundColor = "#2196F3";
  }
  for(let i=0; bok2.length; i++){
    bok2[i].style.backgroundColor = "#f44336";
  }
  for(let i=0; bok3.length; i++){
    bok3[i].style.backgroundColor = "#f538c2";
  }
  for(let i=0; bok4.length; i++){
    bok4[i].style.backgroundColor = "#6b38f5";
  }
}




function wpisywanie() {
  let wejscie = document.getElementsByClassName('wejscie');
  let wejscie1 = wejscie[0].value;
  let kolor = document.getElementById('body');
  kolor.style.backgroundColor = wejscie1;
}



function czcionka() {
  let wejscie = document.getElementsByClassName('wejscie');
  let wejscie1 = wejscie[1].value;
  let czcionka = document.getElementsByTagName("P");
  let link = document.getElementsByTagName("A");
  for (let i = 1; i < czcionka.length; i++) {
    czcionka[i].style.color=wejscie1;
  }
  if (link.length!=37){
    for (let i = 6; i < link.length; i++) {
      link[i].style.color=wejscie1;
    }
  }
}
