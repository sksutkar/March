//  Reverse a Number

// function reverseNumber(num) {
//     let reversed = 0;
//     while (num !== 0) {
//         reversed = reversed * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }

// // Example usage:
// const number = 12345;
// const reversedNumber = reverseNumber(number);
// console.log(`The reverse of ${number} is ${reversedNumber}.`);


// let num = 712;
// let rev = 0;

// while (num > 0) {
//     let r = num % 10;
//     rev = rev * 10 + r;
//    num = Math.floor(num / 10);
// }

// console.log("Reverse:", rev);


// let num = [1,2,3,4,5];
// num.reverse();
// console.log(num);


//Sum of Digits of a Number

// let num=15;
// let sum=0;

// while (num >0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("Sum:", sum);


// function sumOfDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }

//     return sum;
// }

// console.log(sumOfDigits(1234));

//Palindrome Number Check

// function isPalindrome(num){
//     let original = num;
//     let reverse = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     return original === reverse;
// }

// console.log(isPalindrome(121));



// let num = 121;
// let temp = num;
// let rev = 0;

// while (num > 0) {
//   let r = num % 10;
//   rev = rev * 10 + r;
//   num = Math.floor(num / 10);
// }

// if (temp == rev)
//   console.log("Palindrome");
// else
//   console.log("Not Palindrome");


// let str = "madam";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str[i];
// }

// if (str == rev)
//   console.log("Palindrome String");
// else
//   console.log("Not Palindrome");


// var reverse = "";
// function isPalindrome(str) {
//     for (var i = str.length - 1; i >= 0; i--) {
//         reverse = reverse + str[i];
//     }
//     if (str == reverse) {
//         console.log("Palindrome")
//     } else {
//         console.log("It is not palindrome");
//     }
// }
// isPalindrome("dad");


// //Factorial of a Number

// function factorial(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// }

// console.log(factorial(5));


// let n = 5;
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }

// console.log("Factorial:", fact);



// //Prime Number Check

// function isPrime(num) {

//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));


// let num = 7;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }

// if (count == 2)
//   console.log("Prime Number");
// else
//   console.log("Not Prime");


// let num=3;

// if(num%2==0){
//     console.log("Prime Number");

// }else{
//     console.log("Not Prime");
// }



// //Sum, Max, Min in Array

// function arrayOperations(arr=[]) {

//     let sum = 0;
//     let max = arr[0];
//     let min = arr[0];

//     for (let num of arr) {
//         sum += num;

//         if (num > max) {
//             max = num;
//         }

//         if (num < min) {
//             min = num;
//         }
//     }

//     console.log("Sum:", sum);
//     console.log("Max:", max);
//     console.log("Min:", min);
// }

// arrayOperations([10, 20, 5, 8, 30]);


// let arr = [10, 20, 5, 30];

// let sum = 0;
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];

//   if (arr[i] > max)
//     max = arr[i];

//   if (arr[i] < min)
//     min = arr[i];
// }

// console.log("Sum:", sum);
// console.log("Max:", max);
// console.log("Min:", min);



// //Count Vowels in String


// function countVowels(str) {

//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World"));

// let str = "Swapnil";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];

//   if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//     count++;
// }

// console.log("Vowels:", count);


// var str = "SwapnIl";

// for(var i = 0; i < str.length; i++){
//     if("aeiouAEIOU".includes(str[i])){
//         console.log(str[i]);
//     }
// }


// //Armstrong Number


// function isArmstrong(num) {

//     let original = num;
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit * digit * digit;
//         num = Math.floor(num / 10);
//     }

//     return sum === original;
// }

// console.log(isArmstrong(153));


// let num = 153;
// let temp = num;
// let sum = 0;

// while (num > 0) {
//   let r = num % 10;
//   sum += r * r * r;
//   num = Math.floor(num / 10);
// }

// if (sum == temp)
//   console.log("Armstrong Number");
// else
//   console.log("Not Armstrong");


// //Fibonacci Series


// function fibonacci(n) {

//     let a = 0;
//     let b = 1;

//     console.log(a);
//     console.log(b);

//     for (let i = 2; i < n; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }

// fibonacci(10);


// let n = 10;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i < n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

//Binary Search (Sorted Array)

// let arr = [10, 20, 30, 40, 50];
// let key = 30;
// let start = 0;
// let end = arr.length - 1;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (arr[mid] == key) {
//     console.log("Element Found");
//     break;
//   } else if (arr[mid] < key) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }


//  Linear Search

// let arr=[10,20,30];
// let key=20;

// for(let i=0;i<arr.length;i++){
//  if(arr[i]==key)
//   console.log("Found");
// }

//  Binary Search

// let arr=[10,20,30,40];
// let key=30;
// let start=0,end=arr.length-1;

// while(start<=end){
//  let mid=Math.floor((start+end)/2);

//  if(arr[mid]==key){
//   console.log("Found");
//   break;
//  }
//  else if(arr[mid]<key)
//   start=mid+1;
//  else
//   end=mid-1;
// }

//Bubble Sort

// let arr = [5, 2, 9, 1];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {

//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);


//selection sort

// let arr = [8, 3, 5, 2];

// for (let i = 0; i < arr.length; i++) {

//   let min = i;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min])
//       min = j;
//   }

//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr);


//Insertion Sort


// let arr = [7, 4, 5, 2];

// for (let i = 1; i < arr.length; i++) {

//   let key = arr[i];
//   let j = i - 1;

//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = key;
// }

// console.log(arr);


//Merge Two Arrays

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

//Count Words in String

// let str = "Welcome to javascript programming";

// let words = str.split(" ");

// console.log("Word Count:", words.length);

//Remove Duplicate from String

// let str = "programming";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//   if (!result.includes(str[i])) {
//     result += str[i];
//   }
// }

// console.log(result);


//Remove Duplicate from Array

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {

//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

//Pattern Printing Triangle

// let n = 5;

// for (let i = 1; i <= n; i++) {

//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// Largest Number in Array

// let arr = [10, 5, 30, 20];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
// }

// console.log(max);

// Smallest Number in Array

// let arr = [10, 5, 30, 20];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
// }

// console.log(min);

//  Sum of Array Elements

// let arr = [10, 20, 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);


//Number Triangle Pattern

// for (let i = 1; i <= 5; i++) {

//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }

//     console.log(row);
// }



// let str = "Arvind Sutkar"; 
// var res = str.split(' '); 
// var res1 = res[0].toLocaleLowerCase()+'_'+ res[1]; 
// console.log(res1);


// let arr = [1, 2, 4, 5, 7];

// function missingNumber(arr) {
//     let missing = [];
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     for (let i = min; i <= max; i++) {
//         if (!arr.includes(i)) {
//             missing.push(i);
//         }
//     }

//     return missing;
// }

// console.log(missingNumber(arr));


// function missingNumber(arr){
//     let missing=[];
//     for(let i=Math.min(...arr); i<=Math.max(...arr); i++){
//         if(!arr.includes(i)) missing.push(i);
//     }
//     return missing;
// }

// console.log(missingNumber([1,2,4,5,7]));


