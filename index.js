const plussBtn = document.getElementById("add");
const minusBtn = document.getElementById("sub");
const xbtn = document.getElementById("multiply");
const dividebtn = document.getElementById("divide");
const delbtn = document.getElementById("delete");
const equallbtn = document.getElementById("equall");
const onebtn = document.getElementById("one");
const twobtn = document.getElementById("two");
const threebtn = document.getElementById("three");
const fourbtn = document.getElementById("four");
const fivebtn = document.getElementById("five");
const sixbtn = document.getElementById("six");
const sevenbtn = document.getElementById("seven");
const eightbtn = document.getElementById("eight");
const ninebtn = document.getElementById("nine");
const sumfield = document.getElementById("answer");

plussBtn.addEventListener("click", ()=>{
    sumfield.innerText = "+";
})
minusBtn.addEventListener("click", ()=>{
    sumfield.innerText = "-";
})
xbtn.addEventListener("click", ()=>{

    sumfield.innerText = "*";
})

