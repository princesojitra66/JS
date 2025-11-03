// <!-- Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument -->

class Person {

  father(name) {
    const age = 60;
    console.log("---- Father ----");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("----------------\n");
  }

  child(name) {
    const age = 20;
    console.log("---- Child ----");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("----------------\n");
  }
}


const person = new Person();


person.father("Rajesh Sharma");
person.child("Aman Sharma");
