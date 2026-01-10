const btn = document.getElementById('interactBtn');
const monster = document.querySelector('.monster');
const mouth = document.querySelector('.mouth');
const handL = document.querySelector('.hand.left');
const handR = document.querySelector('.hand.right');

// Funzione per animare bocca e mani
function animateMonster() {
  // bocca aperta casualmente
  mouth.style.height = `${20 + Math.random()*20}px`;

  // mani mosse casualmente
  handL.style.transform = `rotate(${rand(-30, 30)}deg)`;
  handR.style.transform = `rotate(${rand(-30, 30)}deg)`;
}

// helper random
function rand(min,max){ return Math.random()*(max-min)+min; }

// Loop continuo ogni 0.5-1s
setInterval(animateMonster, 500 + Math.random()*500);

// Pulsante click = torna indietro
btn.addEventListener('click', ()=>{
	window.location.href = 'index.html';
});