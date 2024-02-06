// 1. Write a program to print the reverse of the given string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let inputString = 'codecode';
let reversedString = reverseString(inputString);
console.log(reversedString); 

// 2.prime number or not
function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    
    return true; 
}
let input1 = 3;
let input2 = 4;
console.log(isPrime(input1) ? "Yes" : "No");
console.log(isPrime(input2) ? "Yes" : "No"); 

// 3. Given an array of numbers, arrange them in a way that it forms the largest value.
function largestNumber(arr) {
    arr.sort((a, b) => {
        const num1 = '' + a + b;
        const num2 = '' + b + a;
        return num2 - num1;
    });

    if (arr[0] === 0) {
        return '0';
    }

    return arr.join('');
}
let input = [54, 546, 548, 60];
console.log(largestNumber(input));

// 4. Given a number N, print reverse of number N.
function reverseNumber(N) {
    return parseInt(String(N).split('').reverse().join('').replace(/^0+/, ''));
}
let number = 988;
console.log(reverseNumber(number)); 

// 5.Given an array of numbers, find the maximum and minimum element in the array.
function findMaxAndMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `${max} ${min}`;
}

let numbers = [54, 546, 548, 60];
console.log(findMaxAndMin(numbers)); 

