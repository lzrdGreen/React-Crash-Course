function checkLesson2() {
  const userCode = document.getElementById("lesson2-code").value.trim();
  const correctCode = `
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`;

  // Normalize white spaces for comparison
  const normalize = (code) => code.replace(/\s+/g, " ").trim();

  const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById("lesson2-result");

  resultElement.textContent = result;

  if (result === "Correct!") {
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.style.color = "red";
  }
}

function revealAnswer2() {
  const correctCode = `
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`;
  const resultElement = document.getElementById("lesson2-result");
  resultElement.textContent = `Correct Answer: ${correctCode}`;
  resultElement.style.color = "#3288bd";
}
