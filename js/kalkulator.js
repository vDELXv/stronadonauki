function kalkulator(numer){
  document.form.wejsciekalkulatora.value = document.form.wejsciekalkulatora.value + numer;
}
function rownanie(){
  let zawartosc = document.form.wejsciekalkulatora.value;
  if(zawartosc){
    document.form.wejsciekalkulatora.value = eval(zawartosc);
  }

}
function czyszczenie(){
  document.form.wejsciekalkulatora.value = "";
}
function wstecz(){
  let zawartosc = document.form.wejsciekalkulatora.value;
  document.form.wejsciekalkulatora.value = zawartosc.substring(0,zawartosc.length-1);
}
