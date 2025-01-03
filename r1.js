function checkLesson1() {
  const userCode = document.getElementById("lesson1-code").value.trim();
  const correctCode = `
function Welcome(props) {
  return <h1>Welcome to React!</h1>;
}`;

  // Normalize white spaces for comparison
  const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
  const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById("lesson1-result");

  resultElement.textContent = result;

  if (result === "Correct!") {
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.style.color = "red";
  }
}

  
  function revealAnswer() {
    const correctCode = `
    function Welcome(props) {
      return <h1>Welcome to React!</h1>;
    }`;
  
    const resultElement = document.getElementById("lesson1-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
   
  