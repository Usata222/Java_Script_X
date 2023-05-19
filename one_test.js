//alert('hello');
console.log('hello');

//variables
let age=30;
    age=31;

console.log(age);

//data type
const name = "usata";
console.log(name);

const agee = 30;
console.log(agee);

const John_is_a_boy=true;
console.log(John_is_a_boy);

const q=null;
console.log(q);

let w;
console.log(w);

console.log(typeof q);

console.log(`my name is ${name} and am ${agee}`);
 
const e= 'Hello world';
console.log(e.length);
console.log(e.split(''));
console.log(e.substring(0,5));
console.log(e.toUpperCase());
console.log(e.substring(6,11).toUpperCase());

let r='cat, dog, goat, horse, carmel';
console.log(r.split(', '));




//arrays
const numbers = Array(1,2,3,4,5,6);
console.log(numbers);

console.log(numbers[1]);

         //or
const num = ['one', 'two', 'three', 'four'];
console.log(num);
console.log(num[1].toUpperCase());

num[0]='zero';
console.log(num);

num.push('five');
console.log(num);

//obj literals



const person = {

    firstname:'Usata',
    lastname:'tekki',
    hobbies:['singing', 'eating', 'dancing'],
    adress:{
        State:'Ondo State',
        Street:'goni road',
        house:'num 16',
    }

}

console.log(person.hobbies[2]);
console.log(person.adress.State);

const {firstname,lastname,adress:{State,Street,house}}=person;

console.log(firstname);

console.log(State);


person.email='tekki@gmail.com';
console.log(person);



//arrays of objects


//const todos=[
  //  {
   //     id:1,
     //   text:'visit friend',
       // completed:true,
  //},

    //{
      //  id:2,
        //text:'cook',
        //completed:true,
   // },

   // {
     //   id:3,
       // text:'code',
       // completed:false,
   // }
//];

//console.log(todos[2].text);



//for

for (let i=0; i<10; i++){
    console.log(`forloop${i}`)
}

let i=0;
while(i<10){
    console.log(i);
    i++
}


//conditionals

const k=10;
if (k== 10){
    console.log('x is 10');
}
else if(k<10){
    console.log('k is less than 10');
}else {
    console.log('x');
}


const x=30;
const y=20;
if(x==30 & y==20){
    console.log('x is 30 or y is 20');
}else {
    console.log('error');
}


   //function
function addnum(num1,num2){
    console.log(num1+num2);
}
addnum(3,4);


function subnum(num1,num2){
    return num1-num2;
}

    console.log(subnum(5,5));




    //OOP

function Person(name, lastname, dob){
    this.name=name
    this.lastname=lastname
    this.dob=Date(dob)
    }

    const person1 = new Person('zira', 'david', 'hux');

    console.log(person1)
