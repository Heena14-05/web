console.log("--------Sum of first N numbers:--------");
let n = 153;
console.log("Number:",n);

// sum of  no.
let sumFirstN=0;
for( let i=1; i<=n ;i++) {
    sumFirstN= sumFirstN+i;
}

console.log("Sum of First",n,"nubers:",sumFirstN);

 
// table of n
console.log("--------Table:--------");

let n2= 4;
console.log("Table of:",n2);
for( let i=1 ; i<=10;i++){
    console.log(n2 +"x" +i+ "=" +(n2*i))
}

// prime no.
console.log("--------Prime number:--------");

let isPrime=true;
let num=6;
if (num <=1){
    isPrime=false;
}
else{
    for(let i=2;i<num;i++){
        if (num %i===0){
            isPrime=false;
            break;
        }
    }
}

let primeResult = isPrime? "yes":"no";
console.log("Is it a prime number?",primeResult);


//  factors
console.log("--------Factors of 18:--------");

let factors =[];
let x=18;
for (let i=1; i<x; i++){
    if(x % i ===0){
        factors.push(i);
    }
}

console.log("Factors", factors.join(", "));

// Armstrong number
console.log("--------Armstrong number:--------");

let armstrongNum = 371;
let armstrongSum =0;
let temp = armstrongNum;

while(temp>0){
    let digit = temp %10;
    armstrongSum = armstrongSum+ (digit*digit*digit);
    temp = Math.floor(temp/10);
}
if (armstrongSum === armstrongNum){
    console.log(armstrongNum, "is an Armstrong number");
}else{
    console.log(armstrongNum ,"is not an Armstrong number");
}
    

// sum of all digits
console.log("------Sun of All Digits-------");

let number= 257;
let result =0;

let numString = number.toString();

for(let i =0; i< numString.length; i++){
    result=result+Number(numString[i]);
}
console.log("Number:", number);
console.log("Sum of All digits:",result);

