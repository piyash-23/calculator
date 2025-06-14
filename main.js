let inputValue = document.querySelector("#inValue");
const buttons = document.querySelectorAll(".operation");
const operands = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
inputValue.value = 0;
for (const button of buttons) {
  button.addEventListener("click", () => {
    inputValue.value = button.innerText;
  });
}
