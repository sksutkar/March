//29/3/26

//Armstrong Number

// let num = 153;
// let sum = 0;
// let temp = num;

// while (num > 0) {
//     let r = num % 10;
//     sum += r * r * r;
//     num = Math.floor(num / 10);
// }

// if (sum == temp) {
//     console.log(" Armstrong Number");
// } else {
//     console.log("Not Armstrong Number");
// }


//Prime Number Check

// let num =18;

// if(num % 2 == 0){
//     console.log("The Prime Number...");  
// }else{
//     console.log("The Prime Not  Number...");
// }


//Sum, Max, Min in Array

// let arr = [5, 12, 25, 45, 35, 20];

// let sum = 0;
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (arr[i] > max) {
//         max = arr[i];
//     }


//     if (arr[i] < min){
//         min = arr[i];
//     }
// }


// console.log("Sum Number",sum);
// console.log("Max Number",max);
// console.log("Min Number",min);


// Smallest Number in Array

// let arr = [12, 25, 45, 18, 35, 20];
// let smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < smallest) {
//         smallest = arr[i];

//     }
// }


// console.log("Smallest Number", smallest);


//// Largest Number

// let arr1 = [12, 25, 45, 18, 35, 20];
// let largest = arr1[0];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > largest) {
//         largest = arr1[i];
//     }
// }
// console.log("Largest Number", largest);


// Vowels checking in String

// let strings = "swapnil";

// for (let i = 0; i < strings.length; i++) {
//     if ("aeiouAEIOU".includes(strings[i])) {
//         console.log("Vowels found in String:",strings[i]);

//     }
// }


// Vowels  Counting in String

// let str = "swapnil";
// let count = 0;  

// for (let i = 0; i < str.length; i++) {
//     if ("aeiouAEIOU".includes(str[i])) {
//         count++;
//     }   
// }

// console.log("Number of Vowels:", count);


//Merge Two Arrays

// let arr=[5,10,15,20];
// let arr1=[25,30,35,40];

// let mergedArray=arr.concat(arr1);
// console.log("Merged Array:", mergedArray);

//Count Words in String

// let str="Hello World! Welcome to JavaScript programming.";
// console.log(str.length);

//Remove Duplicate from String

// let str="programming";
// let DuplicateString='';

// for (let i=0; i<str.length;i++){
//     if(!DuplicateString.includes(str[i])){
//         DuplicateString += str[i];
//     }
// }

// console.log("String after removing duplicates:", DuplicateString);

//Remove Duplicate from Array Number

// let arr = [1, 2, 3, 4, 5, 2, 3, 6];
// let DuplicateArrayNumber = [];


// for (let i = 0; i < arr.length; i++) {
//     if (!DuplicateArrayNumber.includes(arr[i])) {
//         DuplicateArrayNumber.push(arr[i]);
//     }
// }


// console.log("Array after removing duplicates:", DuplicateArrayNumber);



//Pattern Printing Triangle


// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);   
// }


//Number Triangle Pattern

// let num = 5;

// for (let i = 1; i <= num; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + ' ';
//     }
//     console.log(row);   
// }   
  
 // Missing Number


// function MissingNumber(num) {
//     let MissingNum =[];

//     for(let i=Math.min(...num);i<=Math.max(...num);i++){
//         if (!num.includes(i)) {
//             MissingNum.push(i);
            
//         }
//     }

//     return MissingNum;

// }


// console.log(MissingNumber([710,711,713,714]));