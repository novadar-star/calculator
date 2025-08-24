//append what value of button to the screen
/*
btnOne = document.getElementById('one');
btnTwo = document.getElementById('two');
btnThree = document.getElementById('three');
btnFour = document.getElementById('four');

btnFive = document.getElementById('five');
btnSix = document.getElementById('six');
btnSeven = document.getElementById('seven');
btnEight = document.getElementById('eight');


btnNine= document.getElementById('nine');
btnAdd = document.getElementById('add');
btnSub = document.getElementById('subtract');
btnTimes = document.getElementById('multiply');

btnDiv = document.getElementById('divide');
btnDec = document.getElementById('decimal');
btnEq = document.getElementById('equal');
*/

const btns = document.querySelectorAll("button")

btns. forEach(btn=> {
    btn.addEventListener("click", ()=>{
        let value = btn.id
         document.querySelector(".screen").innerHTML+= value;
    })
})
/*
document.querySelectorAll("button").addEventListener("click", e=>
    {
       let target =  e.target ;
       if (target.matches("button")){
        let value = target.data-value;
         document.querySelector(".inner-panel").innerHTML+= value; //appends what the button has clicked
       }
    }
)
    */