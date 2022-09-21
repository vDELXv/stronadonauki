function tlo() {
  let wejscie = document.getElementsByClassName('wejscie');
  let wejscie1 = wejscie[2].value;
  let kolortlatytulu1 = document.getElementsByClassName('bok1');
  let kolortlatytulu2 = document.getElementsByClassName('bok2');
  let kolortlatytulu3 = document.getElementsByClassName('bok3');
  let kolortlatytulu4 = document.getElementsByClassName('bok4');
  for (let i = 0; i < kolortlatytulu1.length; i++) {
    kolortlatytulu1[i].style.backgroundColor = wejscie1;
  }
  for (let i = 0; i < kolortlatytulu2.length; i++) {
    kolortlatytulu2[i].style.backgroundColor = wejscie1;
  }
  for (let i = 0; i < kolortlatytulu3.length; i++) {
    kolortlatytulu3[i].style.backgroundColor = wejscie1;
  }
  for (let i = 0; i < kolortlatytulu4.length; i++) {
    kolortlatytulu4[i].style.backgroundColor = wejscie1;
  }
}
