                 //OOP//
//Object Literal                   
const book1 = {
    title: 'Book One', 
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
};


const book2 = {
    title: 'Book Two', 
    author: 'Jane Doe',
    year: '2015',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
};


console.log(book1.getSummary());

console.log(book2.getSummary());








 //Constructor//
 function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year; 
 }  
 
 //getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
        ${this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

//Revise //Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
};

//Instatiate an Object
const book3 = new Book('Book One', 'John Doe', '2013');
const book4 = new Book('Book Two', 'Jane Doe', '2015');

 console.log(book3);
 book3.revise('2018');
 console.log(book3);




            //Inheritance//

//Constructor//
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year; 
 }  
 
 //getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
        ${this.author} in ${this.year}`;
};
