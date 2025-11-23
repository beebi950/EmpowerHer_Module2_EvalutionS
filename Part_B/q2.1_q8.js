const { accepts } = require("express/lib/request");

let nums = [10, 3, 7, 20, 13, 2];

let squre=nums.map(num => num * num)
console.log("square os numbers : ",squre);

function isPrime(num){
    if(num <=1) 
        return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i==0)
            return false;
    }
    return true;
}

const primes =nums.filter(isPrime)
console.log("Prime number : ",primes);

const sum=nums.reduce((accum,currentEl) => accum + currentEl,0)
console.log("Sum of elments :",sum);

const decending = [...nums].sort((a,b) => b-a);
console.log("Decending order :",decending);