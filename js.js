
const numBtn = document.querySelectorAll(".num")
const operBtn = document.querySelectorAll(".operator")
const screen = document.querySelector("#textfield")
const history = document.querySelector("#history")


screen.value = "0"

let num1 = "";
let num2 = "";
let temp = ""
let operator = "";
let result = "";


//bugs: AC doesnt permanently clear the screen, only its textcontent
//delete button doesnt work
//storing the clicked btn

numBtn.forEach(num=> {
    num.addEventListener("click", (e)=>{
            if(operator === ""){
            screen.value = ""; 
            num1 += e.target.value
            //num1 += e.target.value;
            document.querySelector("#textfield").value = num1;
            //num1 = "";
            }
        
            else{ //if num is inputted will read the sec number
            screen.value = ""; 
            num2 += e.target.value;
            document.querySelector("#textfield").value = num2;

           //alert(typeof num2)
        }
        
        
    
    })
})

operBtn.forEach(operate => {
    operate.addEventListener("click", (e)=>{
        if(e.target.value !== "=" ){ //as long as equal btn is click will print to screen
          
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
            default:
                alert("Error occured!")
            }
          

             document.querySelector("#textfield").value = result; 
             //after clicking press, result must be appended not num2
             /*
             let historyNum = [];
             //why is it outputing 1 not the result itself? LMAOO I CANT    
                history.value = historyNum.push(result);
             alert(historyNum)

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
    if(b == 0){    
        return document.querySelector("#textfield").textContent = "Dont divide by zero!"
    }
    else{
         return (parseFloat(a) / parseFloat(b)).toFixed(2)
    }
}
   
function clearFields(){
   
    num2= ""
     num1 = ""
    result = ""

    document.querySelector("#textfield").value= ""
    document.querySelector("#history").value= ""

}

function backspace(){
    let val = document.querySelector("#textfield").value;
    document.querySelector("#textfield").value = val.substr(0, val.length - 1)
}
