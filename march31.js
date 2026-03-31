//31/03/26

const { where } = require("firebase/firestore/lite");

//Reverse a Number

// let num = 151;
// let res = 0;

// while (num > 0) {
//     let r = num % 10;
//     res = res * 10 + r;
//     num = Math.floor(num / 10);
// }

// console.log("The Reverse Number", res);

//Reverse In String

// const ReverseString=str=>[...str].reverse().join('');
// console.log(ReverseString("swapnil"));


//Sum of Digits of a Number

// let num = 7128;
// let sum = 0;

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("The Sum of Digits", sum);

// Palindrome Number Checking

// let Num = 121;
// let Res = 0;
// let Temp = Num;

// while (Num > 0) {
//     let R = Num % 10;
//     Res = Res * 10 + R;
//     Num = Math.floor(Num / 10);
// }

// if (Temp == Res) {
//     console.log("Palindrome Number...", Temp);
// } else {
//     console.log(" Not Palindrome Number...", Temp);
// }


// palindrome in string

// let str = "radar";
// let res = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     res = res + str[i];
// }

// if (str == res) {
//     console.log("palindrome string...", str);
// } else {
//     console.log("is not palindrome string...", str);
// }

//Armstrong Number cheking

// let num = 153;
// let sum = 0;
// let temp = num;


// while (num > 0) {
//     let r = num % 10;
//     sum += r * r * r;
//     num = Math.floor(num / 10);
// }

// if (sum == temp) {
//     console.log(" Armstrong Number...", temp);
// } else {
//     console.log("Not Armstrong Number", temp);
// }


// Factorial of a Number


// let n = 5;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }

// console.log(fact);

//Prime Number Checking

// let num2 = 18;

// if (num2 % 2 == 0) {
//     console.log("The Prime Number...", num2);
// } else {
//     console.log("The Prime Not  Number...", num2);
// }

//Sum, Max, Min in Array

// let arr = [1, 2, 5, 4, 6, 7, 8, 9, 10, 3];
// let sum = 0;
// let max = arr[0];
// let min = arr[0];


// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (arr[i] > max) {
//         max = arr[i];
//     }

//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }


// console.log("Sum", sum);
// console.log("Max", max);
// console.log("Min", min);

// Smallest Number in Array

// let arr = [12, 25, 45, 18, 35, 20];
// let smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < smallest) {
//         smallest = arr[i];

//     }
// }


// console.log("Smallest Number", smallest);


// Largest Number

// let arr1 = [12, 25, 45, 18, 35, 20];
// let largest = arr1[0];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > largest) {
//         largest = arr1[i];
//     }
// }
// console.log("Largest Number", largest);

// Vowels checking in String
//Vowels  Counting in String

// let str="swapnil";
// let count=0;

// for(let i=0;i<str.length;i++){
//     if ("aeiouAEIOU".includes(str[i])) {
//         console.log(str[i]);
//         count++;
//     }
// }

// console.log(count);


//Merge Two Arrays

// let arr2 = [5, 10, 15, 20];
// let arr3 = [25, 30, 35, 40];

// let MergedArray = arr2.concat(arr3);
// console.log("Merged Array:", MergedArray);

//Count Words in String

// let str = "Hello World! Welcome to JavaScript programming.";
// console.log("Total Count Words in String = ", str.length);

//Remove Duplicate from String

// let StringName = "Swwappnniill";
// let dupalicateName = '';

// for (let i = 0; i < StringName.length; i++) {
//     if (!dupalicateName.includes(StringName[i])) {
//         dupalicateName += StringName[i];
//     }
// }


// console.log(dupalicateName);

//Remove Duplicate from Array Number

// let ArrNumber = [1, 5, 6, 5, 1, 5, 9, 7, 8, 3, 2, 4, 1, 2, 4, 3];
// let duplicateNum=[];


// for(let i=0;i<ArrNumber.length;i++){
//     if (!duplicateNum.includes(ArrNumber[i])) {
//         duplicateNum.push(ArrNumber[i]);

//     }
// }


// console.log(duplicateNum);


//IMP Example of Set and Flat Array

//Set 

// const duplicateNum = new Set([1, 1, 2, 3, 5, 6, 7, 1, 4, 6, 4, 2, 3, 4, 6, 9]);
// console.log(duplicateNum);

//Flat Array

// let Array = [1, 2, [5, 6], [5, 4, 8, [8, 9]]];
// console.log(Array.flat(2));


//Pattern Printing Triangle

// let pn = 5;

// for (let i = 1; i <= pn; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);

// }

//Number Triangle Pattern

// let pn = 5;

// for (let i = 1; i <= pn; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + "";
//     }
//     console.log(row);

// }

//Missing Number Array


// function MissNum(num) {
//     MissingNum = [];
//     for (let i = Math.min(...num); i <= Math.max(...num); i++) {
//         if (!num.includes(i)) {
//             MissingNum.push(i);
//         }
//     }
//     return MissingNum;
// }

// console.log(MissNum([1,3,5,7,9]));

//fibonacci of number series

// let fiba = 5;
// let a = 0, b = 1;

// for (let i = 0; i <= fiba; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;

// }


//Binary  search  and Linear Search 

// let Search = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let Binarysearch = 6;

// for (let i = 0; i <= Search.length; i++) {
//     if (Search[i] == Binarysearch) {
//         console.log(Binarysearch + " found the element...");
//         break;
//     }
// }


// Bubble Sort and Selection Sort and Insertion Sort  In Number

// let BubbleSort = [64, 34, 25, 12, 22, 11, 90];

// let sorting=BubbleSort.sort(function(a,b){
//     if (a > b) {
//         return 1;
//     }

//     if (a < b) {
//         return -1;
//     }
// })

// console.log("Bubble Sort Number",sorting);


//Bubble Sort and Selection Sort and Insertion Sort  In String

//  let  arr=['Html',"Postman","Jira","Css","Js","Bootstrap","Ts","Angular"];
// arr.sort();
// console.log("Bubble Sort String ",arr);
