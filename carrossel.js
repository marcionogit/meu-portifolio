const scrollContainer = document.querySelector('.gallery');
const btnBefore = document.querySelector('#backBtn');
const btnNext = document.querySelector('#nextBtn');
let valorTela = 400

scrollContainer.addEventListener('wheel', (event)=>{
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
});

btnNext.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += valorTela;
})
btnBefore.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= valorTela;
})
const listaCarrossel = document.querySelectorAll('.carrossel-design');


let i = 0;
function carrossel(){
  let intervalo = setInterval(() => {
    if(window.innerWidth < 450){
      valorTela = 300;
      console.log(valorTela)
    } else{
      valorTela = 400
    }
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
    if(window.innerWidth < 450){
      valorTela = 200;
    } else{
      valorTela = 400
    }
    btnBefore.click();
    i--
  if(i === 0){
    clearInterval(intervalo2);
    carrossel();
  }
}, 3000 );
}

carrossel()