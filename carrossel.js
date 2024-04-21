const scrollContainer = document.querySelector('.gallery');
const btnBefore = document.querySelector('#backBtn');
const btnNext = document.querySelector('#nextBtn');

scrollContainer.addEventListener('wheel', (event)=>{
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
});

btnNext.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 400;
})
btnBefore.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 400;
})
const listaCarrossel = document.querySelectorAll('.carrossel-design');

let i = 0;
function carrossel(){
let intervalo = setInterval(() => {
  btnNext.click();
  i++
  if(i === 10){
    clearInterval(intervalo);
    carroselLeft();
  }
}, 3000 );
}

function carroselLeft(){
  let intervalo2 = setInterval(() => {
  btnBefore.click();
  i--
  if(i === 0){
    clearInterval(intervalo2);
    carrossel();
  }
}, 3000 );
}

carrossel()