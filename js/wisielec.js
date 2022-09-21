var haslo;
var haslo2 = [];
var odgadniete;
var nrObrazka;
var dl;
function nowagra(){
  haslo2=[];
  foto.src = "../../img/wisielec/0.png";
  przyciski1.innerHTML = "";
  nrObrazka = 0;
  odgadniete = 0;
  const hasla = ["PROGRAMOWANIE", "CPP", "JAVASCRIPT", "INFORMATYKA", "KOMPUTER", "LAPTOP", "HTML", "PHP", "CSS", "PROCESOR", "RAM"];
    let haslaLength = hasla.length;
    let losowa = parseInt(Math.random() * haslaLength);
    haslo = hasla[losowa];
    dl = haslo.length;
    for(let i = 0; i < dl; i++)
      haslo2[i] = "_";
    pole.innerHTML = haslo2;
    for(let i = 65; i < 91; i++)
    {
      let btnn = document.createElement("button");
        btnn.className ="btnn";
        btnn.innerHTML = String.fromCharCode(i);
        btnn.setAttribute("onclick","f(this)");
        przyciski1.appendChild(btnn);
  }
}
  function f(aktualny){
      let litera = aktualny.innerHTML;
      aktualny.setAttribute("onclick","");
        let trafiona = false;
        for(let i = 0; i < dl;i++)
          if(litera == haslo[i]){
              trafiona = true;
                haslo2[i] = litera;
                odgadniete++;
            }
        if(trafiona == true){
          aktualny.classList.add("new");
          pole.innerHTML = haslo2;
            if(odgadniete >= dl){
              foto.src = "../../img/wisielec/wygrana.png";
              let przyciskii = document.getElementsByClassName('btnn');
              for(let i=0; i<przyciskii.length; i++){
                przyciskii[i].setAttribute("onclick","");
              }
            }

        }
        else{
          aktualny.classList.add("old");
            nrObrazka++;
            if(nrObrazka >= 6){
              foto.src = "../../img/wisielec/6.png";
              let przyciskii = document.getElementsByClassName("btnn");
              for(let i=0; i<przyciskii.length; i++){
                przyciskii[i].setAttribute("onclick","");
              }
      }
            else{
            foto.src = "../../img/wisielec/" + nrObrazka + ".png";
            }
            console.log(foto.src);

        }
      }
