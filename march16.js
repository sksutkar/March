// //16/3/26

// // console.log("swapnil");
// class :
// -is template or structure to create objects.
// -is nothing but collection of variables or methods which are used to perform particular
// functionality.


// Object :
// - is nothing but an instance of class.
// - if you want to access variables and methods related to particular class then we must
// create an object for that class.

// "this" keyword
// - always reference to the current object.
// - declared variables or methods if we want to access in another method of same class
// then we need to use this keyword.





// class Message{
//     Message="swapnil sutkar";


//     display(){
//         console.log("Display The Message...");


//     }
// }


// let MyMessage=new Message();
// MyMessage.display();

// class Car{
//     constructor(brand, model,color) {
//         this.brand = brand;
//         this.model = model;
//         this.color=color;
//     }

//     displayInfo() {
//         console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
//     }
// }

// const myCar = new Car("Toyota", "Corolla", "Blue");
// myCar.displayInfo();


// class personl{
//     firstName='';
//     lastBname='';
//     age=0;

//     setpersonal(fn,ln,age){
//         this.firstName=fn;
//         this.lastBname=ln;
//         this.age=age;
//     }

//     displaypersonal(){
//         console.log(`first name: ${this.firstName}, last name: ${this.lastBname}, age: ${this.age}`);
//     }
// }



// const Myperson = new personl();
// Myperson.setpersonal("swapnil","sutkar",21);
// Myperson.displaypersonal();


// class Student{
//     constructor(name,age,grade){
//         this.name=name;
//         this.age=age;
//         this.grade=grade;
//     }

//     displayStudentInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//     }


// }

// const student1 = new Student("Swapnil", 20, "A");
// student1.displayStudentInfo();


// class Employee{

//     constructor(Emp_name,Emp_position,Emp_salary){
//         this.name=Emp_name;
//         this.position=Emp_position;
//         this.salary=Emp_salary;
//     }

//     SaveEmployeeInfo(){
//         console.log(`Employee Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
//     }

// }

// const employee1 = new Employee("Swapnil", "Software Engineer", 50000);
// employee1.SaveEmployeeInfo();


// class Employee1{
//     emp_Name=" ";
//     emp_designation=" ";
//     company_Name="TCS";


//     constructor(empName,empdesign) {
//         this.emp_Name=empName;
//         this.emp_designation=empdesign;
//     }
//     saveDetails(){
//         console.log("My Name Is " +  this.emp_Name +  " "  +  " And My Designation is "  +  this.emp_designation  +  " "  + " And Working in " + this.company_Name + " Company...");


//     }


// }




// let MyCompany=new Employee1("Swapnil Sutkar","Front End ");
// MyCompany.saveDetails();


// class Student {


//     std_RollNo = 0;
//     std_Name = " ";
//     std_EmailId = " ";
//     std_MobileNo = 0;


//     constructor(RollNo, Name, Email, Mobile) {
//         this.std_RollNo = RollNo;
//         this.std_Name = Name;
//         this.std_EmailId = Email;
//         this.std_MobileNo = Mobile;
//     }


//     Class(){
//         console.log(`RollNo : ${this.std_RollNo} Name : ${this.std_Name} EmailId : ${this.std_EmailId} MobileNo : ${this.std_MobileNo} OK...`);


//     }
// }


// let MyClasses =new Student(1,"Swapnil","swapnil712@gamil.com",9359071566);
// MyClasses.Class();


// class Student {


//     std_RollNo = 0;
//     std_Name = " ";
//     std_EmailId = " ";
//     std_MobileNo = 0;
//     std_Dept=" ";
//     std_Gender=" ";




//with constructor
//     constructor(RollNo, Name, Email, Mobile,Dept,Gender) {
//         this.std_RollNo = RollNo;
//         this.std_Name = Name;
//         this.std_EmailId = Email;
//         this.std_MobileNo = Mobile;
//         this.std_Dept=Dept;
//         this.std_Gender=Gender;
//     }


//     Class(){
//         console.log(`RollNo : ${this.std_RollNo} Name : ${this.std_Name} EmailId : ${this.std_EmailId} MobileNo : ${this.std_MobileNo} Department : ${this.std_Dept} Gender : ${this.std_Gender} ... InFormation...Ok`);


//     }
// }


// let MyClasses =new Student(1,"Swapnil","swapnil712@gamil.com",9359071566,"Computer Science","male");
// MyClasses.Class();





// Encapsulation - Hide implementation details and expose only necessary parts.

// class personal{
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(newName) {
//         this.#name = newName;
//     }
// }

// const person1 = new personal("Swapnil");
// console.log(person1.getName()); // Output: Swapnil

// person1.setName("vishal");
// console.log(person1.getName()); // Output: vishal


// class Student1{
//     #Rollno;
//     #Name;
//     #Marks;
// constructor(Rollno, Name, Marks) {
//     this.#Rollno = Rollno;
//     this.#Name = Name;
//     this.#Marks = Marks;
// }


// getStudent(){
//     return  `Roll No: ${this.#Rollno}, Name: ${this.#Name}, Marks: ${this.#Marks}`;
// }

// setStudent(Rollno, Name, Marks){
//     this.#Rollno = Rollno;  
//     this.#Name = Name;
//     this.#Marks = Marks;

// }

// }

// let student2 = new Student1(101, "Swapnil", 85);
// console.log(student2.getStudent()); // Output: Roll No: 101, Name: Swapnil, Marks: 85

// student2.setStudent(102, "Vishal", 90);
// console.log(student2.getStudent()); // Output: Roll No: 102, Name: Vishal, Marks: 90



// function BankAccount(balance) {

//   let accountBalance = balance; // private variable

//   return {
//     deposit: function(amount) {
//       accountBalance += amount;
//       console.log("Balance:", accountBalance);
//     },

//     withdraw: function(amount) {
//       accountBalance -= amount;
//       console.log("Balance:", accountBalance);
//     }
//   };
// }

// const account = BankAccount(1000);

// account.deposit(500);   // Balance: 1500
// account.withdraw(200);  // Balance: 1300


// function BackAccount(balance) {
//     let accountBalance = balance; // private variable

//     return{
//         deposit(amount){
//             accountBalance += amount;
//             console.log("Balance:", accountBalance);
//         },

//         withdraw(amount){
//             accountBalance -= amount;
//             console.log("Balance:", accountBalance);
//         }

//     };

// }


// const account = BackAccount(1000);
// account.deposit(500);   // Balance: 1500
// account.withdraw(200);  // Balance: 1300



// class BankAccount{
//     #balance=0;


//     deposit(amount){
//         this.#balance += amount;
//     }


//     getBalance(){
//         return this.#balance;
//     }
// }


// let Account=new BankAccount();
// Account.deposit(100);
// console.log(Account.getBalance());//100



// function SBIBANK(Balance) {

//     let SBIBANK = Balance;

//     return {
//         deposit(amount) {
//             SBIBANK += amount;
//             console.log("Balance", SBIBANK);

//         },

//         withdraw(amount) {
//             SBIBANK -= amount;
//             console.log("Balance", SBIBANK);
//         }

//     }


// }


// let MyBank=SBIBANK(0);
// MyBank.deposit(1000); // Balance: 1000
// MyBank.withdraw(288); // Balance: 712




// Inheritance:
// -----------
// Inheritance is nothing but an inherit the properties and methods from some other class
// without rewriting code again we can inherit the properties or methods from one class to another class.
// -we need to use "extends" keyword to inherit the functionality
// from one class to another class.
// from which class we are inheriting the properties or method that class is called Parent class.
// to which class we are inheriting the properties are called child class.
// -the main advantages of Inheritance is code reusability

// Rule:
// -we can access all the parent class methods and variables through child class
// but we cannot access child class related variables and methods through parent class.
// -Any class can extends only one class at a time and can't extends more than one class
// Inheritance - One class can inherit properties and methods from another.




// class Test{
//     sayHello(){
//         console.log("swapnil");

//     }

// }

// class Test1 extends Test{
//     sayHello(){
//         console.log("vishal");
//     }
// }

// let MyTest=new Test();
// let MyTest1=new Test1();
// MyTest.sayHello(); 
// MyTest1.sayHello();


// super()
// -it is used to call parent class constructor from child class.
// -If parent class constructor accepts few arguments then that parameters we need to pass in super method()


// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }   

//     displayInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }

// }

// class student1 extends student{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade=grade;
//     }     

//     displayInfo(){
//         super.displayInfo();
//         console.log(`Grade: ${this.grade}`);
//     }

// }

// let MyStudent=new student1("swapnil",21,"A");
// MyStudent.displayInfo();


// class Employee{
//     constructor(emp_id,emp_name) {
//         this.Emp_id=emp_id;
//         this.Emp_name=emp_name;
//     }

//     displayInfo(){
//         console.log(`Employee ID: ${this.Emp_id}, Employee Name: ${this.Emp_name}`);
//     }
// }

// class Manager extends Employee{
//     constructor(emp_id,emp_name,department) {
//         super(emp_id,emp_name);
//         this.Department=department;
//     }

//     displayInfo(){
//         super.displayInfo();
//         console.log(`Department: ${this.Department}`);
//     }
// }


// let MyManager=new Manager(101,"Swapnil","IT");
// MyManager.displayInfo();    


//1. Single Inheritance

// class Animal {
//   eat() {
//     console.log("Animal is eating");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog is barking");
//   }
// }

// const d1 = new Dog();

// d1.eat();   // from Animal class
// d1.bark();  // from Dog class


//2. Multilevel Inheritance


// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Puppy extends Dog {
//     weep() {
//         console.log("Puppy is weeping");
//     }
// }

// const p1 = new Puppy();

// p1.eat();
// p1.bark();
// p1.weep();


//3. Hierarchical Inheritance


// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log("Cat is meowing");
//     }
// }

// const d1 = new Dog();
// const c1 = new Cat();

// d1.eat();
// d1.bark();

// c1.eat();
// c1.meow();



// Polymorphism 
// --------------
// same name with different functionality is nothing but polymorphism
// two types
// 1.Method Overloading
// 2.Method overriding


// 1.Method Overloading
// -> two method are said to be overload if they have same name with different arguments.
// - typescript compiler does not support the method overloading
// - Javascript does not support the method overloading


// 2.Method Overriding
// -> Due to inheritance concept parent class method and variables are available to child class.
// but child class is not satisfied with parent class method implementation then we can re declare
// or redefine parent class method in child class it its own way.
// -method name , method argument , argument types should be same while overriding.





// class Animal {

//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }

// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }   

// }

// const a1 = new Animal();
// const d1 = new Dog();
// const c1 = new Cat();


// a1.sound(); // Output: Animal makes a sound
// d1.sound(); // Output: Dog barks
// c1.sound(); // Output: Cat meows



// class student{
//     classmate(){
//         console.log(" Hi Student...");
//     }
// }
// class Room1 extends student{
//     vishal(){
//         console.log("Hi Swapnil...");
//     }
//     shankar(){
//         console.log("Hi Swapnya...");
//     }
// }


// let Myclass=new Room1();
// Myclass.shankar();
// Myclass.vishal();


// class Calculator {
//   add(a, b, c) {
//     if (c !== undefined) {
//       return a + b + c;
//     }
//     return a + b;
//   }
// }

// const calc = new Calculator();

// console.log(calc.add(5, 10));     
// console.log(calc.add(5, 10, 15)); 


// class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing a rectangle");
//   }
// }

// const shapes = [new Shape(), new Circle(), new Rectangle()];

// shapes.forEach(shape => shape.draw());


// class Addition {
//     action(x, y) {
//         return x + y;
//     }
// }

// class Multiple extends Addition {
//     action(x, y) {
//         return x * y;
//     }
// }

// class Sub extends Addition {
//     action(x, y) {
//         return x - y;
//     }
// }

// let a = new Addition();
// let m = new Multiple();
// let s = new Sub();

// console.log("Addition:", a.action(10, 5));
// console.log("Multiplication:", m.action(10, 5));
// console.log("Subtraction:", s.action(10, 5));

// method two calling

// const operations = [new Addition(), new Multiple(), new Sub()];

// operations.forEach(op => {
//     console.log(op.action(10,5));
// });



//abstraction

// -abstract class contains some predefined logic and properties which we can customize according to our requirements.
// -abstraction is nothing but hide internal implementation and show just set of service/functionality.
// by using abstract class we can implements abstraction.
// -we cannot create the object for the abstract class as abstract class contains incomplete methods.
// -if a class contains any abstract methods i.e incomelete method and we are not responsible
// to provide implementation for this
// methods then we need to mark this class as abstract.
// -if we want to access methods and variables related to abstract class we need to implement inheritance concept.


// class vehicle {
//     start() {
//          throw new Error("Method 'start()' must be implemented");
//     }
// }

// class Car extends vehicle {
//     start() {
//         console.log("Car starts with a key");
//     }

// }


// let MyCar=new Car();
// MyCar.start();



// class Shape {
//   draw() {
//     throw new Error("draw() method must be implemented");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing Circle");
//   }
// }

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing Rectangle");
//   }
// }

// const s1 = new Circle();
// const s2 = new Rectangle();

// s1.draw();
// s2.draw();



// class Payment {
//   pay() {
//     throw new Error("Payment method must be implemented");
//   }
// }

// class CreditCard extends Payment {
//   pay() {
//     console.log("Payment done using Credit Card");
//   }
// }

// class UPI extends Payment {
//   pay() {
//     console.log("Payment done using UPI");
//   }
// }

// const p1 = new CreditCard();
// const p2 = new UPI();

// p1.pay();
// p2.pay();


//1.Rest Parameters
// Syntax
// three dots(...)
// - we use rest parameters to handle function parameters.


// function showNames(...names) {
//   console.log(names);
// }

// showNames("Swapnil", "Vishal", "Rahul");

// function sum(...numbers) {
//   let total = 0;

//   for (let num of numbers) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(10, 20));
// console.log(sum(10, 20, 30, 40));

// let price= [10, 2, 700];
// let total=price.reduce((sum,price)=>sum +price,0);
// console.log(total);//712




// let arr= [10, 2, 700];
// let result=0;


// for(let n=0;n<arr.length;n++){
//     result=result+arr[n];
// }
// console.log(result);//712



// function add(...num) {
//   return num[0] + num[1];
// }

// console.log(add(5, 10));

// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(10, 20, 30);





// 2.Spread operator:
// Syntax
// three dots (...)
// -is used to spread or unpack or unzip an array or object elements.


// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);


// let a = [1, 2];
// let b = [3, 4];

// let result = [...a, ...b];

// console.log(result);


// function add(x, y, z) {
//   return x + y + z;
// }

// let nums = [10, 20, 30];

// console.log(add(...nums));



// let arr1 = [1, 2, 3];

// let arr2 = [...arr1];

// console.log(arr2);



// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];

// console.log(c);



// const uniqueNums = new Set([1, 2, 3, 3, 4, 4, 5,5,4,8]);
// console.log(uniqueNums);//{ 1, 2, 3, 4, 5, 8 }


// IMP Ex

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(nestedArray.flat(2));//[ 1, 2, 3, 4, 5, 6 ]

// let Array=[1,2,[5,6],[5,4,8,[8,9]]];
// console.log(Array.flat(2));


// var arr = [2, 3, [5, 5, [4, 1], 1]];
// console.log(arr.flat(2)); //[2, 3, 5, 5,4, 1, 1]



// Asynchronous JavaScript refers to the ability of JavaScript to perform tasks without blocking the execution of other code.
// This feature is crucial for improving the performance and responsiveness of applications, especially when dealing with tasks like fetching data from a server, reading files, or executing timers.



//Sync


// console.log(" Sync : 1) Hi...Swapnil");
// console.log(" Sync : 2)  Ye..! Swap...nya");
// console.log(" Sync : 3) Chotya...");


//Async


// console.log(" ASync : 1) Hi...Swapnil");
// setTimeout(()=>{
//     console.log(" ASync : 2)  Ye..! Swap...nya");
// },5000);//5000ms = 5s
// console.log(" ASync : 3) Chotya...");


// console.log("Welcome To");
// setTimeout(()=>{
//     console.log("Swapnil !"); 
// },2500)
// console.log();


// Callbacks
// A callback is a function passed into another function as an argument.
// Oldest method of handling asynchronous operations
// Can lead to "callback hell" with nested operations
// Limited error handling


// function Add(x,y,callback) {
//     console.log(x+y);
//     callback();

// }

// function sayHello() {
//     console.log("Hi Swapnil...");

// }


// Add(700,12,sayHello);



// function add(x,y,callback) {
//     console.log(x + y);
//     callback();


// }
// function sayHello() {
//     console.log("Hi Swapnil...");


// }

// add(10,2,sayHello);


// function finalAmount(totalAmount, discount, callBack) {
//     var finalAmount = totalAmount - discount;
//     console.log(finalAmount);
//     callBack();
// }
// finalAmount(1000, 288, function () {
//     console.log("Order Placed successfully");
// });

// function getAllProducts(callBack) {
//     //get data from backend server which is taking 2 sec.
//     callBack([{ productName: "Mobile", active: false }, { productName: "Laptop", active: true }])
// }
// getAllProducts(function (products) {
//     var filteredProducts = products.filter((el) => el.active);
//     console.log(filteredProducts);
// });


// //false =false=[];
// //true=true={ getData}
// //[ { productName: 'Laptop', active: true } ]



// function CallData(userId, callback) {
//     setTimeout(() => {
//         if (userId) {
//             const user = {
//                 Id: userId,
//                 Name: "Swapnil Sutkar",
//                 EmailId: "swap@712gmail.com"
//             };
//             callback(null, user)
//         } else {
//             callback(new Error('Invalid User ID'));
//         }
//     }, 2500);
// }

// CallData(1, (error, user) => {
//     if(error) {
//         console.log('Error fetching user: ', error);
//     } else {
//         console.log('user: ', user);
//     }
// });


// CallData(2, (error, user) => {
//     if(error) {
//         console.log('Error fetching user: ', error);
//     } else {
//         console.log('user: ', user);
//     }
// });


// Calling Method two

// CallData(1,(error,user)=>{
//     console.log('User: ',user);

// })


// Promise:
//An object representing the eventual completion or failure of an asynchronous operation.
// * Introduced to solve callback limitations
// * Provides cleaner chaining of asynchronous operations
// * Has three states: pending, fulfilled, rejected
// * Allows .then() and .catch() for handling results and errors


// function Mypromise(userId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(userId){
//                 let user={
//                     id: userId,
//                     name: "Swapnil Sutkar",
//                     emailId: "swap.712@gmail.com"
//                 }
//                 resolve(user);
//             }else{
//         reject (new Error("Invalid User ID"));
//             }
//         },2500);
//     })
// }


// Mypromise(1)
// .then((Result)=>{
//     console.log("Result : ", Result);
// })
// .catch((error)=>{
// console.log("Error : ",error);
// })
// .finally(()=>{
//      console.log("task finished...");
// })

// async/await
// async and await make handling promises easier and provide a synchronous-looking syntax.
// * Syntactic sugar over Promises
// * Makes asynchronous code look and behave more like synchronous code
// * Uses try/catch for error handling
// * Allows sequential async operations with clean syntax



// function Mypromise(userId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId) {
//                 let user = {
//                     id: userId,
//                     name: "Swapnil Sutkar",
//                     emailId: "swap.712@gmail.com"
//                 }
//                 resolve(user);
//             } else {
//                 reject(new Error("Invalid User ID"));
//             }
//         }, 2500);
//     })
// }


// async function asyncTaskOperation() {
//     try {
//         const Result = await Mypromise(1);
//         console.log(Result);

//         const Result1 = await Mypromise(2);
//         console.log(Result1);

//         const Result2 = await Mypromise(3);
//         console.log(Result2);

//     } catch (error) {
//         console.log(error);
//         throw new Error('error fetching user');
//     }
// }

// asyncTaskOperation();


//call Method 1
// asyncTaskOperation();


//call Method 2


// asyncTaskOperation()
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });




// class BankAccount {
//     constructor(initialBalance = 0) {
//         this.balance = initialBalance;
//     }


//     deposit(amount) {
//         if (amount <= 0) {
//             console.log('Deposit amount must be greater than zero');
//             return;
//         }
//         this.balance += amount;
//         console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
//     }


//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log('Withdrawal amount must be greater than zero');
//             return;
//         }


//         if (amount > this.balance) {
//             console.log('Insufficient funds for withdrawal');
//             return;
//         }


//         this.balance -= amount;
//         console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
//     }


//     displayBalance() {
//         console.log(`Current Balance: ${this.balance}`);
//     }
// }


// // usage
// const myAccount = new BankAccount(100);


// // Initial balance
// setTimeout(() => {
//     myAccount.displayBalance();
// }, 500);


// // Deposit after 1 second
// setTimeout(() => {
//     myAccount.deposit(50);
// }, 1000);


// // Withdraw after 2 seconds
// setTimeout(() => {
//     myAccount.withdraw(30);
// }, 2000);


// // Invalid withdrawal after 3 seconds
// setTimeout(() => {
//     myAccount.withdraw(200);
// }, 3000);


// // Invalid deposit after 4 seconds
// setTimeout(() => {
//     myAccount.deposit(-1);
// }, 4000);


// // Final balance after 5 seconds
// setTimeout(() => {
//     myAccount.displayBalance();
// }, 5000);

