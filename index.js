const btns = document.getElementsByClassName("calc-btn");
const answer = document.getElementById("answer");
const equal = document.getElementById("equal");
const del = document.getElementById("delete");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const number = e.target.innerText;
    if (answer.innerText.toLowerCase() === "sum") {
      answer.innerText = "";
    }
    answer.innerText += number;
  });
}
del.addEventListener("click", () => {
  answer.innerText = "Sum";
});
equal.addEventListener("click", () => {
  const equation = answer.innerText;
  if (equation.includes("+")) {
    const equationSplit = equation.split("+");
    answer.innerText = Number(equationSplit[0]) + Number(equationSplit[1]);
  }
});
