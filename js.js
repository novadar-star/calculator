
const numBtn = document.querySelectorAll(".button-number")
const operBtn = document.querySelectorAll(".operator")
const screen = document.querySelector(".screen")

screen.textContent = 0;

let firstNum= 0, secondNum, operator;
let temp = ""
let result = "";


//bugs: AC doesnt permanently clear the screen, only its textcontent
//delete button doesnt work
//storing the clicked btn

numBtn.forEach(num=> {
    num.addEventListener("click", (e)=>{
        let target = e.target;
        if(target.class === "screen"){
            return;
        }
            if(operator === ""){
            screen.value = ""; 
            num1 += e.target.value
            //num1 += e.target.value;
            document.querySelector(".screen").value = num1;
            //num1 = "";
            }
        
            else{ //if num is inputted will read the sec number
            screen.value = ""; 
            num2 += e.target.value;
            document.querySelector(".screen").value = num2;

           //alert(typeof num2)
        }
        
        
    
    })
})

operBtn.forEach(operate => {
    operate.addEventListener("click", (e)=>{
        if(e.target.value !== "=" ){ //as long as equal btn is click will print to screen
          
            operator = e.target.value;
            document.querySelector(".screen").value = operator;
        }
        else{ //if equal btn clicked; numerical operations
           
            textfield.value = ""; //clears the input field 
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
          
             document.querySelector(".screen").value = result; 
            
          
            
    }
})
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
    if(b === 0){    
        return document.querySelector(".screen").textContent = "Dont divide by zero!"
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
    document.querySelector(".screen").innerText =  "";
    current = 1;

}

function backspace(){
    let val = document.querySelector(".screen").value;
    document.querySelector(".screen").value = val.substr(0, val.length - 1)
}
