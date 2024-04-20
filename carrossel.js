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

setInterval(() => {
  btnNext.click();
  
}, 3000 ,1);


addEventListener("scroll", (event) => {});

onscroll = (event) => {};



addEventListener('', (event)=>{
  if(event.layerY > 2241)
  console.log(event.layerY)
})