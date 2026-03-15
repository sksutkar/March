// 15/3/26

// let Name="swapnil";
// console.log(Name);
// console.log(Name.length);
// console.log(Name.toUpperCase());


// let x=10;
// console.log(x++);
// console.log(x);


// let x=10;
// console.log(++x);
// console.log(x);

// let x=10;
// console.log(x--);
// console.log(x);

// let x=10;
// console.log(--x);
// console.log(x);

// let a=700;
// let b=12;
// console.log(a+b);


// function add(x,y) {
//    console.log(x+y);
// }

// add(10,20);


// let a=700;
// let b=12;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);   

// let a=700;
// let b=12;

// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a === b);
// console.log(a !== b);

// let age =21;

// if(age>=18){
//     console.log("you can vote");
// }
// else{   
//      console.log("you cannot vote");
// }


// let num = 23;
// if (num > 0) {
//     console.log("number is positive");
// } else {
//     console.log("number is negative");
// }


// let num=21;
// if(num%2==0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

// let day="sunday";

// switch(day){
//     case "monday":
//         console.log("today is monday");   
//         break;
//     case "tuesday":
//         console.log("today is tuesday");   
//         break;    
//     case "wednesday":
//         console.log("today is wednesday");
//         break;

//     case "thursday":
//         console.log("today is thursday");
//         break;

//     case "friday":
//         console.log("today is friday");
//         break;  

//     case "saturday":
//         console.log("today is saturday");
//         break;

//     case "sunday":
//         console.log("today is sunday");
//         break;
//     default:
//         console.log("invalid day");
// }


// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=1;i<=5;i++){
//     console.log("swapnil");
// }

// let Name="swapnil";

// for(let i=0;i<Name.length;i++){
//     console.log(Name[i]);
// }   


// let num = 1;

// while (num <= 5) {
//     console.log(num);
//     num++;
// }



// for(let i=2;i<=20;i=i+2){
//     console.log(i);
// }


// let Name="swapnil";
// console.log(Name.toUpperCase());

// let Name="SWAPNIL";
// console.log(Name.toLowerCase());



// let Name=["swapnil","pratik","pratiksha"];
// console.log(Name);
// console.log(Name.length);

// let Name=["swapnil","pratik","pratiksha"];
// for(let i=0;i<Name.length;i++){
//     console.log(Name[i]);
// }   


// let Name=["swapnil","pratik","pratiksha"];
// let newName=Name.join("-");
// console.log(newName);   

// let Name=["swapnil","pratik","pratiksha"];
// let Name1=Name.map(Name=>Name.toUpperCase());
// console.log(Name1);

// let New=[ 'SWAPNIL', 'PRATIK', 'PRATIKSHA' ];
// let Name=New.map(Name=>Name.toLowerCase());
// console.log(Name);          


// var student = [
//     {
//         first: "swapnil",
//         last: "sutkar",
//         age: 21
//     },
//     {
//         first: "shankar",
//         last: "shinde",
//         age: 22
//     },
//     {
//         first: "vishal",
//         last: "sutkar",
//         age: 23
//     }
// ]

// console.log(student);

// student.forEach(s=>{
//     console.log(s.first.toUpperCase());
//     console.log(s.last.toUpperCase());    
//     console.log(s.age);
// })


// let age =19;

// let IsActive=true;

// if(age>=18 && IsActive){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }



// let age =19;
// let IsActive=true;

// console.log(age<=18 && IsActive);
// console.log(age<=18 || IsActive);



// let isWeeked=true;
// let ishoilday=false;

// if(isWeeked || ishoilday){
//     console.log("you can relax");
// }else{
//     console.log("you cannot relax");
// }


// let username="swapnil";
// let password="7123";

// if(username=="swapnil" && password=="7123"){
//     console.log("login successful");
// }else{
//     console.log("login failed");
// }

// let marks=45;

// if(marks>=90){
//     console.log("grade A");
// }      else if(marks>=80){
//     console.log("grade B");
// } else {
//     console.log("grade C");
// }       


// let age=21;

// let result=age>=18 ? "you can vote" : "you cannot vote";

// console.log(result);            



// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }           



// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue; // Skip the rest of the loop when i is 3
//     }   
//     console.log(i);

// }


// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break; // Exit the loop when i is 3
//     }
//     console.log(i);
// }


// let Savings=0;
// let traget=500;

// while(Savings<traget){
//     Savings+=100;
//     console.log("saving money",Savings);
// }       



// const books = ["Math", "Science", "History", "English"];
// const bookToFind = "Math";

// for (let i = 0; i < books.length; i++) {
//     if (books[i] === bookToFind) {
//         console.log("Book found:", books[i]);
//         break; // Exit the loop once the book is found
//     }   
// }


// for (let i = 1; i <= 10; i++) {

//     if (i % 2 === 0) {
//         continue; // Skip even numbers
//     }
//     console.log(i, "is odd");
// }




// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         continue; // Skip even numbers

//     }
//     console.log(i, "is Even");
// }


// let Name = "swapnil";

// for (let i = 0; i < Name.length; i++) {
//     console.log(Name[i]);

// }


// let str = "swapnil";
// for (let char of str) {
//     console.log(char);
// }


// let NewArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < NewArr.length; i++) {
//     console.log(NewArr[i]);
// }


// let NewArr = [1, 2, 3, 4, 5];
// for (let i = 0; i < NewArr.length; i++) {
//     if (NewArr[i] % 2 === 0) {
//         console.log(NewArr[i], "is Even");
//     } else {
//         console.log(NewArr[i], "is Odd");
//     }
// }


// let NewArr = [1, 2, 3, 4, 5];
// let Result=0;

// for (let i = 0; i < NewArr.length; i++) {
//     Result+=NewArr[i];
// }

// console.log("sum of array is",Result);


// let NewArr = [10, 25, 32, 44, 59];
// let Result=0;

// for (let i = 0; i < NewArr.length; i++) {
//     Result+=NewArr[i];
// }

// console.log("sum of array is",Result);



// try {
//     let x = 10 ; 
//     console.log(x);
// } catch (error) {
//     console.error("An error occurred:", error);
// }finally {    
//     console.log("This will always execute");
// }




// try {
//     let x = 10 / 0; // This will cause an error
//     console.log(x);
// } catch (error) {
//     console.error("An error occurred:", error);
// }finally {    
//     console.log("This will always execute");
// }


// let Arr=[10,2,3,5,4];
// Arr.pop();
// console.log(Arr);

// Arr.push(1);
// console.log(Arr);

// let Arr=[1,2,3,4,5];
// Arr.unshift(0);
// let Arr1=[0,1,2,3,4,5];
// Arr1.shift()
// console.log(Arr);

// let Arr=[5,10,5,6];
// let index=Arr.indexOf(10);
// console.log(index);

// arr=["swapnil","vishal","shankar"];
// let index=arr.indexOf("shankar");
// console.log(index);

// let Arr=[10,20,30,5,6,8];
// let NewArr=Arr.slice(2,5);
// console.log(NewArr);


//  let arr =[5,10,15,20,30];
//  arr.splice(4,0,25);
//  console.log(arr);
 

// let arr=[2,4,6]
// let arr1=[8,10,12]
// let arr2=arr.concat(arr1);
// console.log(arr2);

// let res=[3,2,1];
// res.reverse();
// console.log(res);


// let  arr=['Html',"Py","Css","Js","Bootstrap","Ts"];
// arr.sort();
// console.log(arr);//

// const Ages=[1,5,48,32,85,12,45,8,20];
// let NewArr=Ages.filter(Ages=>Ages>=18);
// console.log(NewArr);


// let EvOrOdd=[10,5,6,87,6,4,0,25,89,43,678,55,9,28,92,54];
// let NewEvOrOdd=EvOrOdd.filter(EvOrOdd=>EvOrOdd%2==0);
// console.log(NewEvOrOdd);

// let arr =[1,2,5,6];
// let newArr=arr.map((el)=>el*5);
// console.log(newArr);


// let arr =[1,2,3,4,5,6,7,8,9,10];
// let newArr=arr.map((el)=>el*5);
// console.log(newArr);

// let arr =[1,2,5,6];
// let newArr=arr.map((el)=>el+5);
// console.log(newArr);


// const prices = [10, 2, 700];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);


// let arr=[2,10,700];
// let result=0;
// for(let n=0;n<arr.length;n++){
//     result=result+arr[n];
// }
// console.log(result);

// function Message() {
//     console.log("Swapnil");
    
// }

// Message();

// function Message1(message) {
//     console.log(message);
    
// }

// Message1("swapnil...")


// function call() {
//     console.log("Hello!");
    
// }

// function call1(message) {
//     console.log("Hello!",message );
    
// }

// call();
// call1("Swapnil");


// function age(age:number){
//     if(age >= 18){
//         console.log("you are eligible for voting");
//     }else{
//         console.log("you are eligible not for voting");
//     }
// }

// age((19));


// function evenorodd(x:number){
//     if(x%2==0){
//         console.log(x + " This Is A Even Number...");
//     }else{
//         console.log(x + " This Is A Odd Number...");
//     }
// }


// evenorodd((10));


// function addtion(x,y){
//     console.log("Addtion Number = " +  (x+y));
// }


// addtion(4,5);

// function test(arr:number[]){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             console.log(arr[i] +  " This Is A Even Number... ");
//         }else{
//              console.log(arr[i] +  " This Is A Odd Number... ");
//         }
//     }
// }


// test([10,15,26,7]);


// function five(){
//     for(let x=1;x<=5;x++){
//         console.log("swapnil");
//     }
// }


// five();




// function five1(message:string){
//     for(let x=0;x<message.length;x++){
//         console.log(message[x]);
//     }
// }


// five1("swapnil")


// function login(UserName,Password) {
//     console.log("UserName =",UserName + " Password =",Password);
    
// }

// login("swapnil",7123)


// let x=10;

// function f1(){
//     console.log(x);
    
// }

// function f2(){
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);

// let x=10;

// function f1(){
//    let  x=25;
//     console.log(x);
    
// }

// function f2(){
//    let  x=15;
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);


// let x=10;

// function f1(){
//    let  x=25;
//     console.log(x);
    
// }

// function f2(){
//       x=15;
//     console.log(x);
    
// }


// f1();
// f2();
// console.log(x);


// var num: number[] = [10, 5, 20, 25, 15, 35, 30, 50, 45, 40];
// var num2 = num.sort(function (a, b) {
// if (a > b) return 1;
// if (a < b) return -1;
// else return 0;
// });
// console.log(num2)

// let college=["swapnil","shankar","vishal"];
// console.log(college.join(" , ")); //"swapnil , shankar , vishal"
// console.log(college)


// All String methods example




// let str = "swapnil";
// console.log(str.length);//7


// let str2 = "swapnil";
// console.log(str2.toUpperCase());//"SWAPNIL"


// let str3 = "SWAPNIL";
// console.log(str3.toLowerCase());//swapnil


// var abc = ["swapnil", "shankar", "vishal"];
// var uc = abc.map(abc => abc.toUpperCase());
// console.log(uc);//["SWAPNIL", "SHANKAR", "VISHAL"]


// var a = ["SWAPNIL", "SHANKAR", "VISHAL"];
// var lc = a.map(a => a.toLowerCase());
// console.log(lc);//["swapnil", "shankar", "vishal"]




// var student = [
//     {
//         first: "swapnil",
//         last: "sutkar",
//         age: 21
//     },
//     {
//         first: "shankar",
//         last: "shinde",
//         age: 22
//     },
//     {
//         first: "vishal",
//         last: "sutkar",
//         age: 23
//     },
// ];
// student.forEach(s => {
//     console.log(`${s.first.toUpperCase()} ${s.last.toUpperCase()}`);
// })
// //SWAPNIL SUTKAR
// // SHANKAR SHINDE
// // VISHAL SUTKAR


// var student1 = [
//     {
//         first: "SWAPNIL",
//         last: "SUTKAR",
//         age: 21
//     },
//     {
//         first: "SHANKAR",
//         last: "SHINDE",
//         age: 22
//     },
//     {
//         first: "VISHAL",
//         last: "SUTKAR",
//         age: 23
//     },
// ];
// student1.forEach(s => {
//     console.log(`${s.first.toLowerCase()} ${s.last.toLowerCase()}`);
// })
// // swapnil sutkar
// // shankar shinde
// // vishal sutkar


// let str="Swapnil";
// console.log(str.charAt(0));//S
// console.log(str.charAt(3));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(2));


// let str="Swapnil";
// console.log(str.indexOf("S")); //0
// console.log(str.indexOf("p"));//3
// console.log(str.indexOf("n"));//4
// console.log(str.indexOf("i"));//5




// let str="Swapnil Sutkar";
// console.log(str.lastIndexOf("r"));//13
// console.log(str.lastIndexOf("a"));//12


// let str="Sutkar is Back...";
// console.log(str.includes("swapnil"));//false
// console.log(str.includes("Sutkar"));//true
//console.log(str.includes("sutkar"));//false


// let str="Swap nil";
// console.log(str.startsWith("nil"));//false
// console.log(str.startsWith("Swap"));//true
// console.log(str.startsWith("swap"));//false


// let str="Swap nil";
// console.log(str.endsWith("nil"));//true
// console.log(str.endsWith("Swap"));//false
// console.log(str.endsWith("Nill"));//false


//  let str = "TypeScript";
// console.log(str.substring(0, 4)); // "Type"
// console.log(str.substring(4, 10)); // "Script"


// let str= "SwapnilSutkar";
// console.log(str.substring(0, 7)); // swapnil
// console.log(str.substring(7, 13)); // sutkar


// let str= "TypeScript";
// console.log(str.slice(0, 4)); // "Type"
// console.log(str.slice(-6)); // "Script"


// let str = "SwapnilSutkar";
// console.log(str.slice(0, 4)); // swap
// console.log(str.slice(-7)); // lsutkar


// let str = "SwapnilSutkar";
// console.log(str.slice(0, 7)); // swapnil
// console.log(str.slice(-6)); // sutkar




// let str= "I love JavaScript";
// let newArr=str.replace("JavaScript", "TypeScript");
// console.log(newArr);//I love TypeScript


// let str="Swapnil Is Back...";
// let newArr=str.replace("Swapnil","Sutkar");
// console.log(newArr);
// //Sutkar Is Back...


// let str="      Swapnil Sutkar    ";
// console.log(str);// "    Swapnil Sutkar   "
// console.log(str.trim());//Swapnil Sutkar


// let str="  Swapnil    "
// console.log(str.trimEnd());//  "   Swapnil"
// console.log(str.trimStart());//"Swapnil   "


// let str="swapnil,vishal,shankar";
// let newArr=str.split(",");
// console.log(newArr);
// //[ 'swapnil', 'vishal', 'shankar' ]


// let str = "Swapnil,Sutkar";
// let arr = str.split(",");
// console.log(arr); // ["Swapnil", "Sutkar"]


// let a = "Hello";
// let b = "World";
// console.log(a.concat(" ", b)); // "Hello World"


// let a = "Hello";
// let b = "Swapnil";
// console.log(a.concat(" ", b)); // "Hello Swapnil"


// let str="Hi Swapnil";
// console.log(str.repeat(5));//Hi SwapnilHi SwapnilHi SwapnilHi SwapnilHi Swapnil


// let str = "5";
// console.log(str.padStart(3, "0")); // "005"
// console.log(str.padEnd(3, "0")); // "500"


// let str= "712";
// console.log(str.padStart(7, "swapnil")); // "swap712"
// console.log(str.padEnd(7, "swapnil")); //"712swap"


// let str = "712";
// console.log(str.padStart(10, "swapnil"));//"swapnil712"



