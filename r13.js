function checkLesson13() {
  const userCode = document.getElementById("lesson13-code").value.trim();

  const correctCode = `
  import React, { useState } from "react";

  function FormComponent() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!input || input.length < 5) {
        setError("Input must be at least 5 characters.");
      } else {
        setError("");
        // form submission logic
        console.log("Form submitted with input:", input);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something"
        />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default FormComponent;
  `;

  const normalize = (code) =>
    code
      .replace(/[\s\n]+/g, " ") // Collapse all whitespace/newlines into a single space
      .replace(/^\s+|\s+$/g, ""); // Trim leading and trailing spaces

  const isCorrect = normalize(userCode) === normalize(correctCode);
  const resultElement = document.getElementById("lesson13-result");

  console.log("Normalized User Code:", normalize(userCode));
  console.log("Normalized Correct Code:", normalize(correctCode));


  if (isCorrect) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.textContent = "Try again!";
    resultElement.style.color = "red";
  }
}


  
  function revealAnswer13() {
    const correctCode = `
  import React, { useState } from "react";
  
  function FormComponent() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!input || input.length < 5) {
        setError("Input must be at least 5 characters.");
      } else {
        setError("");
        // form submission logic
        console.log("Form submitted with input:", input);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something"
        />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default FormComponent;
  `;
  
    const testCode = `
  import { render, screen, fireEvent } from "@testing-library/react";
  import FormComponent from "./FormComponent";
  
  test("form displays error for invalid input", () => {
    render(<FormComponent />);
    
    const input = screen.getByPlaceholderText(/enter something/i);
    const button = screen.getByText(/submit/i);
    
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.click(button);
    
    const errorMessage = screen.getByText(/input must be at least 5 characters/i);
    expect(errorMessage).toBeInTheDocument();
  });
  
  test("form submits valid input", () => {
    render(<FormComponent />);
    
    const input = screen.getByPlaceholderText(/enter something/i);
    const button = screen.getByText(/submit/i);
    
    fireEvent.change(input, { target: { value: "valid input" } });
    fireEvent.click(button);
    
    // We assume the form would normally submit here (e.g., console.log), but for the test we check that error message is not present
    const errorMessage = screen.queryByText(/input must be at least 5 characters/i);
    expect(errorMessage).toBeNull();
  });
  `;
  
    const resultElement = document.getElementById("lesson13-result");
    resultElement.textContent = `Correct Answer: ${correctCode}\n\nTest Code: ${testCode}`;
    resultElement.style.color = "#3288bd";
  }
  