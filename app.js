let displayValue = document.querySelector(".display__value");
let buttons = document.querySelectorAll(".btn");

// console.log(button.textContent);
// console.log(displayValue);

buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    // console.log(e.target.textContent);

    // Для сравнения последнее и предпоследнее число
    let lastValue = displayValue.textContent.substring(
      displayValue.textContent.length,
      displayValue.textContent.length - 1
    );

    // console.log(lastValue);

    if (e.target.textContent === "=") {
      try {
        displayValue.textContent = eval(displayValue.textContent);
      } catch (error) {
        displayValue.textContent = "Ошибка";
      }
    } else if (
      displayValue.textContent === "0" &&
      e.target.textContent !== "."
    ) {
      displayValue.textContent = e.target.textContent;
    } else {
      displayValue.textContent += e.target.textContent;
    }

    if (e.target.textContent === "AC") {
      displayValue.textContent = "0";
    }
  });
});
