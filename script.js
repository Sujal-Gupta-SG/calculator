let screen = document.querySelector(".screen");
let buttons = Array.from(document.getElementsByTagName("button"));

const calans = () => {
  try {
    screen.innerText = screen.innerText.replace(/x/g, "*");
    let result = eval(screen.innerText);
    return (screen.innerText = result);
  } catch (error) {
    return (screen.innerText = "Invalid Expression");
  }
};

document.body.addEventListener("keydown", (e) => {
  // console.log(e);
  if (
    (e.key >= 0 && e.key <= 9) ||
    e.key == "+" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "-"
  ) {
    screen.innerText += e.key;
  } else if (e.key == "=" || e.key == "Enter") {
    calans;
  } else if (e.key == "Backspace") {
    let value = screen.innerText.length;
    // console.log(value)
    screen.innerText = screen.innerText.slice(0, value - 1);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") {
      calans;
    } else {
      if (button.value === "C" || screen.innerText === "Invalid Expression") {
        // Clear the screen when "C" is clicked or if it contains "Invalid Expression"
        screen.innerText = "";
      } else {
        let value = screen.innerText;
        if (value.length > 90) {
          screen.innerText = value.slice(0, 90);
        }
        screen.innerText += button.value;
      }
    }
  });
});
