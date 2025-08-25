
const numBtn = document.querySelectorAll(".num")
const operBtn = document.querySelectorAll(".operator")
const equals = document.querySelector("#equal")

let clickBtn = 0;

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

//outputs the value on the screen
numBtn.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        clickBtn = e.target.value; //dont output if value
    document.querySelector("#textfield").value += clickBtn;
    })
})


numBtn.forEach(num=> {
    num.addEventListener("click", (e)=>{
        if(operator === ""){ //will read first number if operator is empty
            num1 += e.target.value;
            alert(num1)
        }
        else{ //if num is inputted will read the sec number
            num1 += e.target.value;
            alert(num2)
        }
    } )
})
//document.querySelector("#equal").addEventListener("click", ()=> param)
//need to figure out once operation clicked you will have a new set of screen where u will apply the second parameter
//STEP 6
//three variables


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
     document.querySelector("#textfield").value += result;
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

