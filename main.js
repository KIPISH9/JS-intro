// variables
//declared through var,let and const
// with let you can reassign values
let Age=30;
age=31;
console.log(age);
// datatypes i.e primitive =Strings,numbers,boolean,null, undefined
const name='dan';
const age=30;
const isCool=true;
const rating=4.5;
const x = null;
const y=undefined;
let z;
console.log(typeof x);
//concutnation
console.log('my name is' + name  ,'and i am' + age);
//Template strings
console.log(`My name is ${name} and i am ${age}`);
//strings properties
const s='Hellow world';
console.log(s.length);//.touppercase(),split changes it into an array
//console.log(s.split(' '))
// arrays-these are variables that holds multiple values
//array constructor
const numbers= new Array(1,2,3,4,5);
console.log(numbers);
//using array brackets
const fruits =['apples','mangoes','oranges','banana'];

fruits[6]='nandiis';
fruits.push('pears');//adding some stuff on an array
fruits.unshift('strawberries');//bringing to the top
fruits.pop('mangos')//removing
console.log(fruits[1]);
//Object literals
const person={
  firstName:'Daniel',  
  lastName:'kipish',
  age:30,
  hobbies:['music','movies','footbal'],
  address:{
    street:'Nairobi',
    city:'nairobi',
    state:'riftvalley'
  }
}
console.log(person.firstName,person.lastName);
//adding properties
person.email='kipishdaniel9@gmail.com';
//array objects
const todos=[
    {
        id:1,
        text:'take out trash',
        isCompleted:true

    },
    {
        id:2,
        text:'take coffee',
        isCompleted:true

    },
    {
        id:3,
        text:'do some coding',
        isCompleted:false

    },
 
];
console.log(todos);
//JSON-The format in which data is sent into the server
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
//for loops
for(let i=0;i<10;i++){
    console.log(i);
}
//while loop
let i =0;
while(i<10){
    console.log(i);  
    i++;
}
//looping through an array
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}
//conditionals
const r=10;
if(r==10){
    console.log('r s equal 10');
}else{
    console.log('r s not equal 10'); 
}
//ternary operator
const w=10;
const color=w>10? 'red':'blue';
console.log(color);
//functions
function addnumbs(num1,num2){
return num1+num2;
}
addnumbs(5,4)
//constructor functions 
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}
//instatiate object
const person1=new Person('daniel','Kipish','18-09-2001')
console.log(person1);
//class
class Person{
    constructor (firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;  
    }
}getBirthYear() ;{
    return this.dob.getFullYear();
}
getFullName() ;{
    return `${this.firstName},${this.lastName}`;
}
//events
const btn =document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    console.log('click');
    e.preventDefault();
});
btn.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();

}
//constructor function
function Book(tittle,name,age){
this.tittle=tittle;
this.name=name;
this.age=age;
}
//instatiate an object
const book1=new Book(); 