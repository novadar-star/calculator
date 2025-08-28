
const numBtn = document.querySelector("#number-btn")
const operBtn = document.querySelector("#operator")
const screen = document.querySelector(".inner-panel")

let firstNum= 0, secondNum, operator;
let temp = ""
let result = "";
let current = 1;


//bugs: AC doesnt permanently clear the screen, only its textcontent
//delete button doesnt work
//storing the clicked btn

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
    if(b === 0){    
        return document.querySelector(".inner-panel").innerText = "Dont divide by zero!"
    }
    else{
         return ((a/b).toFixed(2))
    }
}


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
        case "÷":
            result = divide(num1, num2)
            break;
        default:
            alert("Error occured!")
            }


    if (result === ""){
        return result
    }

    return Math.round((result * 1000)/1000) //rounds to 3 decimal places
}


function clearFields(){
  document.querySelector(".inner-panel").innerText =  "";
    current = 1;

}

let latestClick = 0; //number = 0 operator 1

function clickedEquals(){
    if(operator === undefined){
        return;
    }
    else if(latestClick === 0){
        screen.innerText = "" + operate(first, screen.innerText, second)
        current = 2
    }
}

function operButtonClick(target){
    if(operator !== undefined && latestClick === 0){
        screen.innerText = ""  + operate(firstNum, screen.innerText, operator)

    }
    firstNum = screen.innerText;
    operator = target.innerText;
    current = 2;
    alert(`left: ${firstNum} and operator ${operator}`);

    latestClick =1
}

function numBtnClick(target){
    if(current === 2){ //if current screen is clicked with anthing other than num and oper
        clearFields()
    }
    screen.innerText += target.innerText;
    latestClick = 0;
}

function backspace(){
    let val = document.querySelector(".inner-panel").value;
  document.querySelector(".inner-panel").value = val.substr(0, val.length - 1)
}

numBtn.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.id === "number-btn"){ 
        return
    }
    else if(target.id === "backspace"){
        backspace()
    }
    else if(target.id === "operator"){
        operButtonClick(target)
    }
    else{
        numBtnClick(target)
    }
    alert(target.id)
})
