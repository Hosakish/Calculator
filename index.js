const btns = document.getElementsByClassName("calc-btn")

for(let i = 0; i<btns.length;i++){
    btns[i].addEventListener("click", ()=>[
        console.log("index", i)
    ])
}