function nazwa(){                                               //mój kod odtąd
      document.getElementById('nazwa').style.display = "none";
      document.getElementById('przy1').style.display = "none";
      document.getElementById('ilosc').style.display = "inline-block";
      document.getElementById('przy').style.display = "inline-block";
      document.getElementById('gratulacje').style.display = "none";


    }           //dotąd
    var start;  //jakieś małe zmiany od tąd
    let pary = [];
    let clickSum;
    let d;
	function plansza(){
    start = new Date();
		let s = parseInt(ilosc.value);
        clickSum = 0;
		d = s * s;          //do tąd
		plansz.innerHTML="";
					let x = 1;
					let losowa;
					let pom;
					for(let i = 0; i < d; i+=2){
						pary[i] = x;
				        pary[i+1] = x;
				        x++;
					}
					for(let i = 0; i < d; i++) {
						losowa = parseInt(Math.random() * s);
				        pom = pary[i];
				        pary[i] = pary[losowa];
				        pary[losowa] = pom;
					}
		for(let i=0; i < d ; i++){
				const btn = document.createElement("button");
				btn.className="btn btnnew";
                btn.id = i;
				plansz.appendChild(btn);
				btn.innerHTML="?";


				const  br = document.createElement("br");
				if(i % s == s - 1 ){
					plansz.appendChild(br);
				}
		}
	}
    function f(aktualny){
        if(!aktualny.classList.contains("btnold")){
            const poprzedni = plansz.querySelector(".btnclick");
            clickSum++;
            if(poprzedni == null){
                aktualny.classList.add("btnclick");
                aktualny.classList.remove("btnnew");
                aktualny.innerHTML = pary[aktualny.id];
            }
            else if(aktualny.id != poprzedni.id){
                aktualny.innerHTML = pary[aktualny.id];
                if(aktualny.innerHTML == poprzedni.innerHTML){
                    poprzedni.classList.add("btnold");
                    aktualny.classList.add("btnold");
                    poprzedni.classList.remove("btnclick");
                    aktualny.classList.remove("btnnew");
                }
                else
                {

                    poprzedni.classList.remove("btnclick");
                    poprzedni.classList.add("btnnew");
                    poprzedni.innerHTML = "?";
                    aktualny.classList.add("btnclick");
                    aktualny.classList.remove("btnnew");
                    aktualny.innerHTML = pary[aktualny.id];
                }
            }
        }

        let wszystkie = document.getElementsByClassName('btnold'); // oraz moj kod odtąd
        let s = parseInt(ilosc.value);
        let d = s * s;
        let wszystkiee= wszystkie.length;
        let czass=document.getElementById('czas')
        if(wszystkiee==d){
          plansz.innerHTML="";
          var nazwaa = document.getElementById("nazwa").value;
          const stop = new Date();
          var czaswms = parseInt(stop - start);
          var minuty=0;
          var sekundy=0;
          var ms=0;
          if(czaswms>=60000){
            minuty=czaswms/60000;
            sekundy=(czaswms%60000)/1000;
            ms=(czaswms%60000)%1000;
          }
          else if(czaswms<60000){
            minuty=0;
            sekundy=czaswms/1000;
            ms=czaswms%1000;
          }
          else if(czaswms<1000){
            ms=czaswms;
          }
          minuty=Math.floor(minuty);
          sekundy=Math.floor(sekundy);
          ms=Math.floor(ms);
          const nowywynik = document.createElement("LI");
          const enter = document.createElement("BR");
  				nowywynik.className="wyniki";
  				czass.appendChild(nowywynik);
          czass.appendChild(enter);
  				nowywynik.innerHTML=nazwaa +" - " + " LICZBA KLIKNIĘĆ: " + clickSum + ". ILOŚĆ KWADRATÓW: " + d + ". CZAS: "+ minuty +"m "+sekundy+ "s "+ms+"ms";
          document.getElementById('nazwa').style.display = "inline-block";
          document.getElementById('nazwa').value="";
          document.getElementById('przy1').style.display = "inline-block";
          document.getElementById('ilosc').style.display = "none";
          document.getElementById('ilosc').value="";
          document.getElementById('przy').style.display = "none";
          document.getElementById('ranking').style.display = "block";
          document.getElementById('czas').style.display = "inline-block";
          document.getElementById('gratulacje').style.display = "block"; //do tąd
        }
    }
