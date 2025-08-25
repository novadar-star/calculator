
const numBtn = document.querySelectorAll(".num")
const operBtn = document.querySelectorAll(".operator")
document.querySelector("#textfield").value = 0

let num1 = "";
let num2 = "";
let temp = ""
let operator = "";
let result = "";

//storing the clicked btn
numBtn.forEach(num=> {
    num.addEventListener("click", (e)=>{
        if(operator === ""){ //will read first number if operator is empty
            num1 += e.target.value;
            document.querySelector("#textfield").value = num1;
            //alert(typeof num1)
        }
        else{ //if num is inputted will read the sec number
             textfield.value = ""; 
            num2 += e.target.value;
            document.querySelector("#textfield").value = num2;
           //alert(typeof num2)
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
            }

         /*
            if(document.querySelector("#textfield").value = result){ //if res has been showwed
                num1 = "";
                num2 = "";  
                document.querySelector("#textfield").value = ""; 
                 
            }
            else{
                document.querySelector("#textfield").value = result; 
            }
                */
                
          
            
    }
})
})


function add(a,b){
    return parseFloat(a) + parseFloat(b)
}
function subtract(a,b){
    return parseFloat(a) - parseFloat(b)
}
function multiply(a,b){
    return parseFloat(a) * parseFloat(b)
}
function divide(a,b){
    if(b === 0){    
        return document.querySelector("#textfield").textContent = "Dont divide by zero!"
    }
    else{
         return parseFloat(a) / parseFloat(b)
    }
}
   
function clearFields(){

    textfield.value = 0;
   
    sessionStorage.clear();
}

function backspace(){
    let val = document.querySelector("#textfield").value;
    document.querySelector("#textfield").value = val.substr(0, val.length - 1)
}
