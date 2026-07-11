const testArray =[5,8,6,3,10,14];

// named function
function findMax(arr){
    if (arr.length ===0) return null;
    let max = arr[0];
    for (let i =1; i< arr.length;i++){
        if (arr[i] >max){
            max= arr[i];
        }
    }
    return max;
}
// anonymous function
const calculateSum = function(arr){
    let sum =0;
    for (let i=0; i< arr.length; i++){
        sum+= arr[i];
    }
    return sum;
};
// arrow function 
const countOdds =(arr)=>{
    let count =0;
    for (let i= 0; i<arr.length;i++){
        if (arr[i]% 2!==0){
            count++;
        }
    }
    return count;
}

console.log("Array:",testArray);
console.log("Maximum number:",findMax(testArray));
console.log("Sum of all elements:",calculateSum(testArray));
console.log("Count of odd numbers:",countOdds(testArray));

