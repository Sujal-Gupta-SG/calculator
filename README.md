# Calculator Web App

This is a simple web calculator application built using HTML, CSS, and JavaScript. The project includes a responsive 404 page and a calculator interface.

## Project Structure

The project structure consists of three main files:

- **HTML (`index.html`):**
  - Defines the structure of the web page.
  - Includes a 404 page and a calculator interface.
  - Linked to external stylesheets (`style.css`) and JavaScript file (`script.js`).

- **CSS (`style.css`):**
  - Contains styling information for the 404 page and the calculator interface.
  - Uses media queries for responsiveness.

- **JavaScript (`script.js`):**
  - Implements the calculator functionality.
  - Allows users to perform basic arithmetic operations.
  - Handles input, clears the screen, and evaluates expressions.

## Cloning the Repository

To clone this repository, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to clone the repository.

3. Run the following command:
   ```
   git clone https://github.com/Sujal092004/calculator.git
Change into the cloned directory:


cd calculator
Running the Application
Open the index.html file in a web browser to view the calculator application.

Interact with the calculator by clicking on the buttons to input numbers and perform operations.

Note: The 404 page will be displayed when the browser window width is below 1400 pixels.

Calculator UI Details
The calculator UI is designed with a responsive layout.
It includes rows of buttons for digits (0-9), operators (+, -, *, /), clear (C), and equals (=).
The calculator supports basic arithmetic operations and displays results on the screen.
Responsive Design
The calculator UI is responsive and adjusts to different screen sizes. The 404 page becomes visible when the browser window width is below 1400 pixels.


*Additional Notes:*
- The `eval` function in JavaScript is used to evaluate expressions. However, using `eval` with user input may pose security risks. Consider implementing a safer method for evaluating expressions in a production environment.
- The media queries in the CSS file ensure that the calculator is hidden when the browser window width is below 1400 pixels, and the 404 page is displayed instead.
- The project uses the following external image for the background of the 404 page: [404 Background Image](https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif).
