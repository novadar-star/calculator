
const btns = document.querySelectorAll("button")
const equals = document.querySelector("#equal")
let clickBtn = 0;
btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        clickBtn = e.target.textContent;
        document.querySelector(".screen").textContent += clickBtn;
    })
})

 document.querySelector("#equal").addEventListener("click", ()=> param)
//need to figure out once operation clicked you will have a new set of screen where u will apply the second parameter

//three variables
let num1 = "";
let num2 = "";
let operator = "";

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1,num2)
        case "-":
            return subtract(num1,num2)
        case "x":
            return multiply(num1,num2)
        case "÷":
            return divide(num1,num2)
    }
}
/*

btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        let res = 0;
        let a;
        let b;
        //figure how to store 2 parameters 
         btnOper = e.target.id;
         switch(btnOper){
            case "add":
                return add(a,b)
            case "subtract":
                return subtract(a,b)
            case "multiply":
                return multiply(a,b)
            case "divide":
                return divide(a,b)
         }
    })
})
//once equal button is sclicked, appropriate operation function will occur

let res = 0;
equals.addEventListener("click", (e)=> {
    btnOper = e.target.id;
    alert(btnOper)
})
*/
  
function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    if(b === 0){
        return NaN;
    }
    else{
        return a / b
    }
    
}
function clear(){
    document.querySelector(".screen").textContent = " ";
}

