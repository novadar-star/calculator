
const btns = document.querySelectorAll("button")
const equals = document.querySelector("#equal")
const operBtn = document.querySelectorAll(".operator")
let clickBtn = 0;

btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        clickBtn = e.target.value; //dont output if value

    document.querySelector("#textfield").value += clickBtn;
    })
})

 document.querySelector("#equal").addEventListener("click", ()=> param)
//need to figure out once operation clicked you will have a new set of screen where u will apply the second parameter

//three variables
let num1 = "";
let num2 = "";
let operator = "";
let result ;
function operate(num1, num2, operator){
    switch(operator){
        case "+":
            result = add(num1,num2)
        case "-":
            result =subtract(num1,num2)
        case "x":
            result = multiply(num1,num2)
        case "÷":
           result = divide(num1,num2)
    }
     document.querySelector("#textfield").textContent += result;
}

operBtn.forEach(operate => {
    operate.addEventListener("click", function(){

    })
})

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
function clearFields(){
    textfield.value = "";
}

function backspace(){
     let val = document.querySelector("#textfield").value;
      document.querySelector("#textfield").value = val.substr(0, val.length - 1)
}

