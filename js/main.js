const vis = document.querySelector('.menu');
const miClass = document.querySelector('.burger__block');
    
    miClass.addEventListener('click', miClick);


function miClick() {
    if (vis.style.display === 'flex'){
       vis.style.display = 'none';
   } else {
       vis.style.display = 'flex';
   }
} 

// ===================================

const content = document.querySelector('.list-drop');
const clak = document.querySelector('.menu-item-2');
    
    clak.addEventListener('click', mifunction);


function mifunction() {
    if (content.style.display === 'block'){
       content.style.display = 'none';
   } else {
       content.style.display = 'block';
   }
} 

// ==================================================
// Добавление и удаление класса 

const burgerBlock = document.querySelector('#burgerBlocl');
const burger = document.querySelector('#burger');

burgerBlock.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
})
