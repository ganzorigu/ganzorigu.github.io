
// Exercise 1 - filterword
String.prototype.filter = function (word) {
  let temp = this.indexOf(word+" ");
  let str = this;
  while(temp >=0) {
    str = str.substring(0,temp) + str.substring(temp+word.length);
    temp = str.indexOf(word);
  }
  return str;
}

console.log("not this house is not nice!".filter("not"));


// Exercise 2 - BubbleSort
Array.prototype.bubbleSort = function() {
  let temp;
  for (j=this.length-1; j>0; j--) {
    for (let i=0; i<j; i++) {
      if (this[i]>this[i+1]) {
        temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
}
console.log([6,4,0,3,-2,1].bubbleSort());

// Exercise 3 - 
// create Person, Teacher object
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;  
}
Person.prototype.getName = function(){
  return this.firstName+" "+this.lastName;
}

// teacher
function Teacher(firstName, lastName) {
  Person.call(this, firstName, lastName);  
}

//Inherit the person prototype methods
Teacher.prototype = Object.create(Person.prototype);

//Make customer.prototype return Teacher()
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function(subject) {
  console.log(this.getName()+" is teaching "+subject);
}
const myTeacher = new Teacher("Bob", "Johns");
console.log(myTeacher);
myTeacher.teach("Math");


const personClass = function(param1, param2){
  let firstName = param1;
  let lastName = param2;
  return {
    getName:function() {
      return this.firstName+" "+lastName; 
    }
  };  
}


const teacherClass = function(param1, param2) {
  let getName = Object.create(personClass(param1,param2));
  return {
    getName,
    teach:function(subject){
      console.log(" is teaching "+subject);
    }
  }
}


// const myPerson = personClass("Ganzorig","Ulziibayar");
// console.log(personClass);
// const teacherClass = Object.create(personClass);
// teacherClass.prototype.teach = function(){
//   console.log("Im teaching Math");
// }

// console.log(teacherClass);

// const johnTeacher = teacherClass("John","Doe");
// console.log(johnTeacher);
// johnTeacher.teach();
// johnTeacher.getName();


// teacherObj.prototype.teach = function(subject) {
//   console.log(this.getName()+" is teaching "+subject);
// }

// Exercise 4
console.log("Exercise 4 starts here");

function PersonEx4(name, age){
  this.name = name;
  this.age = age;
}

PersonEx4.prototype.greeting = function() {
  console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

PersonEx4.prototype.salute = function() {
  console.log(`Good morning!, and in case I dont see you,
  good afternoon, good evening and good night!`);
};

function StudentEx4(name, age, major) {
  PersonEx4.call(this, name, age);
  this.major = major;
}

StudentEx4.prototype = Object.create(PersonEx4.prototype);
StudentEx4.prototype.constructor = StudentEx4;

StudentEx4.prototype.greeting = function(){
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`); 
}

function ProfessorEx4(name, age, department) {
  PersonEx4.call(this, name, age);
  this.department = department;  
}

//Inherit the person prototype methods
ProfessorEx4.prototype = Object.create(PersonEx4.prototype);
ProfessorEx4.prototype.constructor = ProfessorEx4;

ProfessorEx4.prototype.greeting = function(){
  console.log(`Good day, my name is ${this.name} and I am in ${this.department} department.`); 
}

const testProfessor = new ProfessorEx4('Bob', 45,'Computer Science');
const testStudent = new StudentEx4('John', 25,'Software Developer');

// console.log(testProfessor);
testProfessor.salute();
testProfessor.greeting();

// console.log(testStudent);
testStudent.salute();
testStudent.greeting();