//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
//console.log(document.location);
//console.log(document.title);
//document.title = 123;
//console.log(document.all);

  

//SELECTOR//

//get element by id//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = "goodbye";
//headerTitle.innerHTML = '<h1>morning</h1>';
//headerTitle.style.border = 'solid black';


//get element by class//
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//for(i=0; i<items.length; i++){
//items[3].style.backgroundColor = 'yellow';} 



//QUERYSELECTOR//
var header = document.querySelector('#main-header');
header.style.border = ('solid 4px #ccc');


var input = document.querySelector('input');
input.value = ('hello');

var submit = document.querySelector('input[type="submit"]');
submit.value = ('Send');

 
//QUERYSELECTOR//










///////////      DOM 2      //////////








//TRAVERSING THE DOM//

var itemList = document.querySelector('#items');

//parentNode//
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = ('#f4f4f4');
//console.log(itemList.parentNode.parentNode);

//parentElement (can be interchangeable with parent element)//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes (not recommended)//
//console.log(itemList.childNodes);

//children (recommended)//

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild (not recommended)//
// console.log(itemList.firstChild);

// firstElementChild (recommended)//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild (not recommended)//
//console.log(itemList.lastChild);

// lastElementChild (recommended)//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


// nextSibling (not recommended)//
// console.log(itemList.nextSibling);

// nextElementSibling (recommended)//
// console.log(itemList.nextElementSibling);


// previousSibling (not recommended)//
// console.log(itemList.previousSibling);

// previousElementSibling (recommended)//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';





// CREATE ELEMENT //

// Create a div// 
//var newDiv = document.createElement('div');

//console.log(newDiv);
// Add class
//newDiv.className = 'hello';

// Add id
//newDiv.id = 'hello1';

// // Add attr
//newDiv.setAttribute('title', 'Hello Div');


// // Create text node
//var newDivText = document.createTextNode('Hello World');

// // Add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

// console.log(newDiv);

//newDiv.style.fontSize = '30px';

//container.insertBefore(newDiv, h1);












///////////      DOM 2      //////////










// EVENTS //
var button = document.getElementById('button').addEventListener
('click', buttonClick);

function buttonClick(){
    console.log('Button clicked');
}

