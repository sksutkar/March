//  Reverse a Number

// let num = 123;
// let rev = 0;

// while (num > 0) {
//     let r = num % 10;
//     rev = rev * 10 + r;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse", rev);


// let num = 789;
// let R = 0;

// while (num > 0) {
//     let r = num % 10;
//     R=R*10 +r;
//     num=Math.floor(num /10);
// }

// console.log(R);



//Reverse String

// function ReverseString(str) {
//     return str.split("").reverse().join('');
// }


// console.log(ReverseString("swapnil"));


// const ReverseString=str=>[...str].reverse().join('');
// console.log(ReverseString("Tata"));




//Sum of Digits of a Number


// let num=1588;
// let sum=0;

// while (num>0) {
//     sum += num %10;
//     num=Math.floor(num/10);
// }

// console.log(sum);


// function sumOfDigits (num) {
//     let sum=0;

//     while (num>0) {
//         sum += num%10;

//         num=Math.floor(num/10);

//     }
//     return sum ; 
// }


// console.log(sumOfDigits(1586));


//Palindrome Number Check



// let num = 151;
// let Rev = 0;
// let temp = num;

// while (num > 0) {
//     let r = num % 10;
//     Rev = Rev * 10 + r;
//     num = Math.floor(num / 10);
// }

// if (temp == Rev) {
//     console.log("Palindrome Number...");

// } else {
//     console.log(" Not Palindrome Number...");

// }


// function IsPalindrome(num) {
//     let Rev=0;
//     let Temp=num;

//     while (num >0) {
//         let r=num%10;
//         Rev=Rev*10+r;
//         num=Math.floor(num/10);
//     }
//     return Temp == Rev;
// }


// console.log(IsPalindrome(212));


// palindrome in string

// let str="reder";
// let rev="";

// for(let i=str.length-1;i>=0;i--){
//     rev=rev+str[i];
// }

// if (str==rev) {
//     console.log("palindrome number...");

// } else {
//     console.log("is not palindrome number...");

// }




// function ispalindrome(str) {
//     let rev='';
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev = rev + str[i];
//     }

//     if (str == rev) {
//         console.log("palindrome number...");

//     } else {
//         console.log("is not palindrome number...");
//     }
// }

// ispalindrome("dad");


//Factorial of a Number

// let n =3;
// let fact = 2;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }

// console.log(fact);

// function Isfactorial(num) {
//     let fact = 2;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i
//     }
//     return fact;
// }


// console.log(Isfactorial(6));

//Prime Number Check

// let num=3;

// if(num%2==0){
//     console.log("Prime Number");

// }else{
//     console.log("Not Prime");
// }

//Sum, Max, Min in Array

// let arr = [5, 12, 25,45, 35, 20];

// let sum = 0;
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (arr[i] > max){
//         max = arr[i];
//     }
    


//     if (arr[i] < min){
//         min = arr[i];
//     }
    
// }


// console.log("Sum:", sum);
// console.log("Max:", max);
// console.log("Min:", min);



// function SMM(arr) {
//     let sum=0;
//     let max=arr[0];
//     let min=arr[0];

//     for(let num of arr){
//         sum +=num;

//         if (num>max) {
//             max=num;
//         }

//         if (num<min) {
//             min=num;
//         }
//     }
//     console.log("Sum:", sum);
//     console.log("Max:", max);
//     console.log("Min:", min);
// }


// SMM([7,144,200,144,217]);


// Smallest Number in Array

// let arr=[10,5,6,8,2];
// let min=arr[0];

// for(let i=0; i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }

// console.log(min);


// Largest Number in Array

// let arr=[5,6,10,8,2];
// let max=arr[0];

// for(let i=0; i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }

// console.log(max);



// Vowels check and Count Vowels in String


// let str="swapnil";

// for(let i=0;i<str.length;i++){
//     if("aeiouAEIOU".includes(str[i])){
//         console.log(str[i]);
        
//     }
// }


// function countVowels(str) {
//     let count=0;
//     let Vowels="aeiouAEIOU";

//     for(let char of str){
//         if(Vowels.includes(char)){
//             count++;
//         }
        
//     }
//     return count
// }


// console.log(countVowels("arivond"));

//Armstrong Number

// let num=153;
// let temp=num;
// let sum=0;

// while (num > 0) {
//     let r=num%10;
//     sum += r*r*r;
//     num=Math.floor(num/10);
// }

// if (sum==temp) {
//     console.log(" Armstrong Number");
    
// } else {
//     console.log("Not Armstrong Number");
    
// }

//Merge Two Arrays


// let arr=[10,25,6];
// let arr1=[65,5,67];
// let arr2=arr.concat(arr1);
// console.log(arr2);

//Count Words in String

// let str="welcome to swapnil";
// let words=str.split('');
// console.log("Word Count:",words.length);


// let str="welcome to swapnil";
// console.log(str.length);


//Remove Duplicate from String


// let str="programming";
// let result='';

// for(let i=0;i<str.length;i++){
//     if(!result.includes(str[i])){
//         result +=str[i];
//     }
// }

// console.log(result);


//Remove Duplicate from Array

// let arr=[1,5,68,4,5,2,6,1,5,4,26,2];
// let Result=[];

// for(let i=0;i<arr.length;i++){
//     if(!Result.includes(arr[i])){
//         Result.push(arr[i]);
//     }
// }


// console.log(Result);


//Pattern Printing Triangle

// let n=5;

// for(let i=1;i<=n;i++){
//     let row=" ";

//     for(let j=1;j<=i;j++){
//         row += "*";
//     }
//     console.log(row);
    
// }


//Number Triangle Pattern

// for(let i=1;i<=5;i++){
//     let row=" ";

//     for(let j=1;j<=i;j++){
//         row +=j + " ";
//     }
//     console.log(row);
    
// }


//Missing Number

// function MissingNumber (arr) {
//     let Missing=[];
//     for (let i=Math.min(...arr);i<=Math.max(...arr);i++){
//         if(!arr.includes(i)){
//             Missing.push(i);
//         }
//     }
//     return Missing;
// }


// console.log(MissingNumber([710,711,713,714]));//712
