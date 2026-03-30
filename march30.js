//30/3/26


//Reverse a Number

let num = 159;
let rev = 0;

while (num > 0) {
    let r = num % 10;
    rev = rev * 10 + r;
    num = Math.floor(num / 10);
}

console.log("The Reverse Number", rev);

//Reverse In String

const RevserName = Strings => [...Strings].reverse().join('');
console.log(RevserName("Swapnil"));

//Sum of Digits of a Number


let num1 = 7128;
let sum = 0;


while (num1 > 0) {
    sum += num1 % 10;
    num1 = Math.floor(num1 / 10);
}

console.log("The Sum of Digits", sum);


// Palindrome Number Checking

let Num = 121;
let Res = 0;
let Temp = Num;

while (Num > 0) {
    let R = Num % 10;
    Res = Res * 10 + R;
    Num = Math.floor(Num / 10);
}

if (Temp == Res) {
    console.log("Palindrome Number...", Temp);
} else {
    console.log(" Not Palindrome Number...", Temp);
}

//// palindrome in string


let Str = "radar";
let Res1 = '';

for (let i = Str.length - 1; i >= 0; i--) {
    Res1 = Res1 + Str[i];
}

if (Str == Res1) {
    console.log("palindrome number...", Str);
} else {
    console.log("is not palindrome number...", Str);
}

// Factorial of a Number


let N = 5;
let Fact = 1;

for (let i = 1; i <= N; i++) {
    Fact = Fact * i;
}

console.log("Factorial of a Number = ", Fact);

//Armstrong Number cheking

let Num1 = 153;
let Sum = 0;
let Temp1 = Num1;

while (Num1 > 0) {
    let R1 = Num1 % 10;
    Sum += R1 * R1 * R1;
    Num1 = Math.floor(Num1 / 10);
}

if (Sum == Temp1) {
    console.log(" Armstrong Number...", Temp1);
} else {
    console.log("Not Armstrong Number", Temp1);
}

////Prime Number Checking

let num2 = 18;

if (num2 % 2 == 0) {
    console.log("The Prime Number...", num2);
} else {
    console.log("The Prime Not  Number...", num2);
}

//Sum, Max, Min in Array

let Arr = [5, 12, 25, 45, 35, 20];

let Sum1 = 0;
let Max = Arr[0];
let Min = Arr[0]


for (let i = 0; i < Arr.length; i++) {
    Sum1 += Arr[i];

    if (Arr[i] > Max) {
        Max = Arr[i];
    }
    if (Arr[i] < Min) {
        Min = Arr[i];
    }
}

console.log("Sum Number", Sum1);
console.log("Max Number", Max);
console.log("Min Number", Min);

// Smallest Number in Array

let arr = [12, 25, 45, 18, 35, 20];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {
        smallest = arr[i];

    }
}


console.log("Smallest Number", smallest);


// Largest Number

let arr1 = [12, 25, 45, 18, 35, 20];
let largest = arr1[0];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }
}
console.log("Largest Number", largest);

// Vowels checking in String
//Vowels  Counting in String

let StringName = "arvind";
let count = 0;

for (let i = 0; i < StringName.length; i++) {
    if ("aeiouAEIOU".includes(StringName[i])) {
        console.log("Vowels found in String:", StringName[i]);
        count++;
    }
}
console.log("Number of Vowels:", count);


//Merge Two Arrays

let arr2 = [5, 10, 15, 20];
let arr3 = [25, 30, 35, 40];

let MergedArray = arr2.concat(arr3);
console.log("Merged Array:", MergedArray);


//Count Words in String

let str = "Hello World! Welcome to JavaScript programming.";
console.log("Total Count Words in String = ", str.length);

//Remove Duplicate from String

let ArrString = "programming";
let duplicateString = '';

for (let i = 0; i < ArrString.length; i++) {
    if (!duplicateString.includes(ArrString[i])) {
        duplicateString += ArrString[i];
    }
}

console.log("String after removing duplicates:", duplicateString);



//Remove Duplicate from Array Number

let ArrNumber = [1, 5, 6, 5, 1, 5, 9, 7, 8, 3, 2, 4, 1, 2, 4, 3];
let duplicateArray = [];

for (let i = 0; i < ArrNumber.length; i++) {
    if (!duplicateArray.includes(ArrNumber[i])) {
        duplicateArray.push(ArrNumber[i]);
    }
}


console.log("Array after removing duplicates numbers:", duplicateArray);


//IMP Example of Set and Flat Array

//Set 

const duplicateNum = new Set([1, 1, 2, 3, 5, 6, 7, 1, 4, 6, 4, 2, 3, 4, 6, 9]);
console.log(duplicateNum);

//Flat Array

let Array = [1, 2, [5, 6], [5, 4, 8, [8, 9]]];
console.log(Array.flat(2));

//Pattern Printing Triangle

let PN = 5;
console.log("Pattern Printing Triangle");
for (let i = 1; i <= PN; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row);
}

//Number Triangle Pattern

console.log("Number Triangle Pattern");


for (let i = 1; i <= PN; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + " "
    }
    console.log(row);
}

//Missing Number Array

function MissingNum(Num3) {
    let MissingNumArray = [];

    for (let i = Math.min(...Num3); i <= Math.max(...Num3); i++) {
        if (!Num3.includes(i)) {
            MissingNumArray.push(i);
        }
    }
    return MissingNumArray;
}

console.log("Missing Number Array ");
console.log(MissingNum([1, 2, 3, 7, 8, 9]));

//fibonacci of number series

let fiba = 5;
let a = 0, b = 1;


console.log("Fibonacci of number series");

for (let i = 1; i <= fiba; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;

}

//Binary  search  and Linear Search 

let Search = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Binarysearch = 6;

for (let i = 0; i <= Search.length; i++) {
    if (Search[i] == Binarysearch) {
        console.log(Binarysearch + " found the element...");
        break;
    }
}

// Bubble Sort and Selection Sort and Insertion Sort  In Number

let BubbleSort = [64, 34, 25, 12, 22, 11, 90];

let Sorting = BubbleSort.sort(function (a, b) {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }
})

console.log("Bubble Sort Number",Sorting);


//Bubble Sort and Selection Sort and Insertion Sort  In String

 let  arr5=['Html',"Postman","Jira","Css","Js","Bootstrap","Ts","Angular"];
arr5.sort();
console.log("Bubble Sort String ",arr5);