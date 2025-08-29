const numBtn = document.querySelector("#number-btn")
const operBtn = document.querySelector("#operator")
const screen = document.querySelector(".inner-panel")
const clearBtn = document.querySelector("#clear")

let firstNum= 0;
let secondNum, operator;
let current = 1;

//bugs:
/*
square function doesnt work (maybe bc of 1 parameter only)
*/

function operate(first, second, operator){
    let num1 = +first,
    num2 = +second;
    let result;

     switch(operator){
        case "+":
            result =  add(num1, num2)
            break;
        case "-":
            result = subtract(num1, num2)
            break;
        case "x":
            result = multiply(num1, num2)
            break;
        case "/":
            result = divide(num1, num2)
            break;
        case " ^":
            result = raise(num1)
            break;
       
        default:
            alert("Error occured!")
            }
    if (result === ""){ //if  string..return
        return result
    }

    return Math.round((result + Number.EPSILON) * 100) / 100

    }




let latestClick = 0; //number = 0 operator 1

function clickedEquals(){
    if(operator === undefined){ 
        return;
    }
    else if(latestClick === 0){
        screen.innerText = "" + operate(firstNum, screen.innerText, operator)
        current = 2
    }
   
}


function numBtnClick(target){
    if(current === 2){ //if current screen is clicked with anthing other than num and oper
        clearFields()
    }
    
    screen.innerText += target.innerText;
    latestClick = 0;

}

function operButtonClick(target){
    if(operator !== undefined && latestClick === 0){ //if oper is define and latestClick is 0
        screen.innerText =  operate(firstNum, screen.innerText, operator)
    }
    firstNum = screen.innerText;
    operator = target.innerText;
    current = 2;
    alert(`left: ${firstNum} and operator ${operator}`);

    latestClick =1
}


function backspace(){
 if(screen.innerText > 0){
    screen.innerText = screen.innerText.slice(0,-1)
 }
}

function clearFields(){
    //convert number to tring then use slice
     if(screen.innerText > 0){
    screen.innerText = screen.innerText.slice(-1,0)
     }
    current = 1;

}

numBtn.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.id === "number-btn"){  //returns the button itself
        return
    }
    else if(target.id === "operator"){
        operButtonClick(target)
    }
    else{
        numBtnClick(target)
    }
})

clearBtn.addEventListener("click", (e)=>{
 let target = e.target;
 if (target.id === "backspace"){
   backspace()
 }
 else if(target.id === "clear-all"){
    clearFields()
    window.top.location = window.top.location  
 }
// else if(target.id === "clear-all")
else if(target.id === "equals"){
    clickedEquals()
}
    operator == undefined
})

function add(a,b){
    return a + b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    if(b == 0){    
        let message =  "Dont divide by zero!"
        alert(message)
    }
    else{
         return ((a/b).toFixed(2))
    }

}
function square(a,b){
    b= 2
    return Math.pow(a,b)

}

