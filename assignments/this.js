/* The for principles of "this";
 * in your own words. explain the four principles for the "this" keyword below.
 *
 * 1. Window Binding-"this" refers to the global scope window object.
 * 2. New Binding-Creates new object and sets it as "this" for the function
 * 3. Implicit Binding-"this" will be binded to the obj/word that is in front of the ".this"
 * 4. Explicit Binding-tells the function to use a specific object for "this"
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayHello(name) {
  console.log("Hello " + name);
  //   console.log(this);
}

sayHello("Jimmy");

// Principle 2

// code example for Implicit Binding
var user = {
  userName: "Jackie",
  userPass: "pickle49",
  sayHello() {
    console.log("Hello " + this.userName);
  }
};

user.sayHello();

// Principle 3

// code example for New Binding
function newBind() {
  this.name = "Jack";
  this.sayHi = function() {
    console.log("I am " + this.name);
  };
}
var name = "Sawyer";
var newName = new newBind();
console.log(newName.name);

// Principle 4

// code example for Explicit Binding
function sayHello() {
  console.log("Hello, my name is " + this.name + " I am " + this.age);
}

var user1 = {
  name: "Sheryl",
  age: 29,
  gender: "F"
};

var user2 = {
  name: "Cooper",
  age: 17,
  gender: "M"
};

sayHello.call(user1);
sayHello.apply(user2);
