
const numBtn = document.querySelectorAll(".num")
const operBtn = document.querySelectorAll(".operator")

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

/*
bugs:
//nagaccumulate si num2
//may mali sa 1 nagcocontenate
//num2 is getting stored once reclicking but num1 is resettin fine

*/
//storing the clicked btn
numBtn.forEach(num=> {
    num.addEventListener("click", (e)=>{
        if(operator === ""){ //will read first number if operator is empty
            num1 += e.target.value;
            document.querySelector("#textfield").value = num1; //outputs the value on the screen
            //alert(num1)
        }
        else{ //if num is inputted will read the sec number
            num2 += e.target.value;
            document.querySelector("#textfield").value  = num2;
           // alert(num2)
        }
    })
})

operBtn.forEach(oper=> {
    oper.addEventListener("click", (e)=>{

        if(e.target.value !== "="){ //as long as equal btn is click will print to screen
            operator = e.target.value;
            document.querySelector("#textfield").value = operator;
        }
        else{ //if equal btn clicked; numerical operations
            textfield.value = ""; //clears the input field 
            switch(operator){
                case "+":
                    result = add(+num1, +num2)
                    break;
                case "-":
                    result =subtract(+num1, +num2)
                    break;
                case "x":
                    result = multiply(+num1, +num2)
                    break;
                case "÷":
                    result = divide(+num1, +num2)
                    break;
                default:
                    break;
            }
            document.querySelector("#textfield").value = result; 
            
           
    }
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
    num1.valueOf = "";
     num2.valueOf = "";
    textfield.value = "";
}

function backspace(){
     let val = document.querySelector("#textfield").value;
      document.querySelector("#textfield").value = val.substr(0, val.length - 1)
}

