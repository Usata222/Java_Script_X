//single element selector
console.log(document.getElementById('my-form')); 
console.log(document.querySelector('.container'));


//multiple element
console.log(document.querySelectorAll('.item'));


//looping through
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

//manipulating
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent=('HELLO');
//ul.children[2].textContent=('lamb');

//const btn = document.querySelector('.btn');
//btn.style.background = "grey";


//Event
//const btn = document.querySelector('.btn');
//btn.addEventListener('click',(e) => {
  //  e.preventDefault();
  //  console.log(e);
//});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('sumbit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value);
}