let screen = document.querySelector(".screen");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") {
      try {
        screen.innerText = screen.innerText.replace(/x/g, "*");
        let result = eval(screen.innerText);
        screen.innerText = result;
      } catch (error) {
        screen.innerText = "Invalid Expression";
      }
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
