//  <!-- Create a School class and create a student , faculty and peon method and student name email contact print same as faculty and peon using class & object. -->
class School {
    
  student(name, email, contact) {
    console.log("----- Student Details -----");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact: " + contact);
    console.log("---------------------------\n");
  }


  faculty(name, email, contact) {
    console.log("----- Faculty Details -----");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact: " + contact);
    console.log("---------------------------\n");
  }


  peon(name, email, contact) {
    console.log("----- Peon Details -----");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact: " + contact);
    console.log("---------------------------\n");
  }
}

const mySchool = new School();

mySchool.student("Rahul Sharma", "rahul@student.com", "9876543210");
mySchool.faculty("Dr. Anjali Mehta", "anjali@school.com", "9123456780");
mySchool.peon("Suresh Kumar", "suresh@school.com", "9988776655");
