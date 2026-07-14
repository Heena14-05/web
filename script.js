
// Division using Promise
const divideNum=(a,b)=>{
    return new Promise((resolve, reject) => {
        console.log("Dividing",a ,"by" , b ,"...");

        if(b===0){
            reject("Error:Division by zero is not allowed.");
        }else{
            resolve(a/b);
        }
        
    })
}
// 5 cases
async function test() {
    try {
        console.log("Result",await divideNum(12,2));
        
    } catch (error) {
        console.log(error);
        
    }
    try {
        console.log("Result",await divideNum(15,0));
        
    } catch (error) {
        console.log(error);
        
    }
    try {
        console.log("Result",await divideNum(68,2));
        
    } catch (error) {
        console.log(error);
        
    }
    try {
        console.log("Result",await divideNum(100,2));
        
    } catch (error) {
        console.log(error);
        
    }
    try {
        console.log("Result",await divideNum(52,0));
        
    } catch (error) {
        console.log(error);
        
    }
}
test();