function checkLesson11() {
  const userCode = document.getElementById("lesson11-code").value.trim();

  const correctCode = `
  import React, { useState, useCallback } from "react";

  const ExpensiveComponent = React.memo(({ compute }) => {
    console.log("ExpensiveComponent re-rendered");
    return <p>Computed value: {compute()}</p>;
  });

  function App() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const compute = useCallback(() => {
      console.log("Computing...");
      return count * 2;
    }, [count]);

    return (
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setOtherState((prev) => !prev)}>Toggle State</button>
        <ExpensiveComponent compute={compute} />
      </div>
    );
  }

  export default App;
  `;

  const normalize = (code) => code.replace(/\s+/g, " ").trim();

  const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById("lesson11-result");

  resultElement.textContent = result;

  if (result === "Correct!") {
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.style.color = "#e31a1c";
  }
}

function revealAnswer11() {
  const correctCode = `
  import React, { useState, useCallback } from "react";

  const ExpensiveComponent = React.memo(({ compute }) => {
    console.log("ExpensiveComponent re-rendered");
    return <p>Computed value: {compute()}</p>;
  });

  function App() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const compute = useCallback(() => {
      console.log("Computing...");
      return count * 2;
    }, [count]);

    return (
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setOtherState((prev) => !prev)}>Toggle State</button>
        <ExpensiveComponent compute={compute} />
      </div>
    );
  }

  export default App;
  `;

  const resultElement = document.getElementById("lesson11-result");
  resultElement.textContent = `Correct Answer: ${correctCode}`;
  resultElement.style.color = "#1f78b4";
}
