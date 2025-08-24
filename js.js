
const btns = document.querySelectorAll("button")
const equals = document.querySelector("#equal")
//need to figure out once operation clicked you will have a new set of screen where u will apply the second parameter
let clickBtn = 0;
btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        clickBtn = e.target.textContent;
        document.querySelector(".screen").textContent += clickBtn;
    })
})

btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        let res = 0;
        let a;
        let b;
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
/*
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

