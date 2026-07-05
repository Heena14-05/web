// Compound Interest

let P= 5000;
let r =0.07;
let n= 4;
let t= 3;

let A= P* ((1+(r/n)) ** (n*t));
let compoundInterest = A-P;
console.log("The Compound Interest after", t, "years is:" ,compoundInterest.toFixed(2));

