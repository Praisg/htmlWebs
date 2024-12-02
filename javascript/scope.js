function checkscope(){
    "use strict";
    let i = "function scope";
    if (true){
       let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkscope()
// const is used to assign a variable that you wont change
//let declares a variable in the block it was defined while var declares in for all scope
const s = [5, 7, 9];// but for array we can change
function editinPlace(){
    "use strict"
    /*s = [1,2,3]; error */
    s[0] = 1


}
editinPlace()

//use function object.freeze to stop const variables form being changed
const MATH_PI = {
    PI : 3.14 // an object
}
Object.freeze(MATH_CONSTANTS)
