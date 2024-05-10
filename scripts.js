const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either input is an empty string
  if (dividend === "" || divider === "") {
    console.error("Both inputs are required");
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else {
    // Check for specific invalid inputs
    if (dividend === "YOLO" && divider === "+++") {
      document.body.innerText = "Something critical went wrong. Please reload the page";
      // Log an error with the call stack
      console.error(new Error("Invalid inputs: 'YOLO' and '+++'"));
    } else {
      // Check for division by zero
      if (divider === "0") {
        console.error("Division by zero error occurred");
        result.innerText = "Division not performed. Invalid number provided. Try again";
      } else {
        // Perform the division
        const quotient = Math.floor(parseInt(dividend) / parseInt(divider));
        result.innerText = quotient.toString();
      }
    }
  }
});
