//console.log('hello world');
//console.error('This is an error');
//console.warn('This is a warning')


//variables
//var let const
let age = 30;
 age=31;

 console.log(age);

 const score=20;
  console.log(score)
  //score=40;
  


  //Datypes
  //primitive e.g string, numbers, boolean, null, undefined
const name = 'John';
const year=54;
const iscool=true;
const x=null;
const y=undefined;
let z;
console.log(typeof z);

 
//concatenation
console.log('My name is '+name+' and I am ' + year );


 //Template String
 console.log(`my name is ${name} and I am ${age}`);
 


const s = 'hello world';
console.log(s.length);

console.log(s.toUpperCase());

console.log(s.substring(0,5).toUpperCase());

console.log(s.split(''));


const w = 'computer, monitor, mouse, cpu';

console.log(w.split(', '));


//Arrays
const numbers = new Array(1,2,3,4,5);

console.log(numbers);


const fruits = ['apple', 'orange', 'pears', 10, true];

console.log(fruits);

console.log(fruits[1]);

fruits[3]='mango';
console.log(fruits);

fruits.push('grapes');
console.log(fruits);

fruits.unshift('peach');
console.log(fruits);

fruits.pop(); 
console.log(Array.isArray(fruits)); 
console.log(fruits);

console.log(fruits.indexOf('apple'));


//object literials
const person={
    firstname:'John',
    lastname:'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street:'50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

console.log(person.hobbies[2]);



const { firstname, lastname } = person;

console.log(firstname);

const {address:{city}} = person;

console.log(city);


//methods for strings, arrays, objects
const todos =[
    {
        id:1,
        text: 'takeout trash',
        completed:true
    },
    {
        id:2,
        text: 'meeting with boss',
        completed:true
    },
    {
        id:3,
        text: 'dentist app',
        completed:false
    }
];

console.log(todos[2].text);

//loops
    //for
  for(let i=0; i<10; i++) {
    console.log(`for loop number:'${i}`);
  } 

    //while
    let i = 0;
    while(i < 10) {
        console.log(`while loop number:${i}`);
        i++;
    }

    

    //foreach
    for (let todo of todos) {
        console.log(todo.id);
    }


  todos.forEach(function(todo){
    
    console.log(todo.text);
})

 //conditionals
 const p=20;

 if(x==10) {
     console.log('x is 10');
 } else if('p > 10'){
     console.log('p is greater than 10');
    
 }else if('p<10'){
     console.log('p is less than 10')
 }

 const d =6;
 constre =11;
  if(d>5 || e>10){
      console.log('d is more than 5 or e is more than 10')
  }


       //tenary
 const m=11;

 const color = m > 10 ? 'blue' : 'red';

 console.log(color);


switch(color){
    case'red':
    console.log('color is red');
    break;
    case'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color not red or blue');
        break;

}


//function

function addNums(num1, num2) {
    console.log(num1+num2);
}

   addNums(3, 4);

   //or

function subnums(num1, num2){
    return num1 + num2;
}

 console.log(subnums(5, 5));



       //arrow functions

const subnum=(num1,num2) => num1+num2

console.log(subnum(9,5));    


 

//object oriented programs(opp)

     //constructor function


     //prototype
function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

    Person.prototype.getBirthYear=function() {
    return this.dob.getFullYear();
}
    Person.prototype.getFullName=function(){
    return `${this.firstname} ${this.lastname}`;
}
}





//Istantiate obj

const person1 = new Person('simon', 'James', '02-8-2002')
console.log(person1);
const person2 = new Person('house', 'home', '7-22-2001')
console.log(person2);

console.log(person1.getBirthYear());

console.log(person1.getFullName());