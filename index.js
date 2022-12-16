let box1 = document.querySelector('#box-1');
let box2 = document.querySelector('.box-2');
document.querySelector('button').addEventListener('click',()=>{
   box2.innerHTML = box1.value
});

