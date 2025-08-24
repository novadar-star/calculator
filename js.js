
const btns = document.querySelectorAll("button")
const equals = document.querySelector("#equal")

//need to figure out once operation clicked you will have a new set of screen where u will apply the second parameter
let clickBtn = 0;
btns.forEach(btn=> {
    btn.addEventListener("click", (e)=>{
        clickBtn = e.target.innerHTML;
         document.querySelector(".screen").innerHTML+= clickBtn;
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
    return a / b
}
function clear(){
    document.getElementById("all-clear").value = "";
}

