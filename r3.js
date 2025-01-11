function checkLesson3() {
  const userCode = document.getElementById("lesson3-code").value.trim();
  const correctCode = `
function TaskList({ tasks }) {
  return (
    <div>
      {tasks.every(task => task.completed) ? (
        <p>All items are completed!</p>
      ) : (
        <ul>
          {tasks
            .filter(task => !task.completed)
            .map((task, index) => (
              <li key={index}>{task.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}`;

  // Normalize white spaces for comparison
  const normalize = (code) => code.replace(/\s+/g, " ").trim();

  const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById("lesson3-result");

  resultElement.textContent = result;

  if (result === "Correct!") {
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.style.color = "#e31a1c";
  }
}

function revealAnswer3() {
  const correctCode = `
function TaskList({ tasks }) {
  return (
    <div>
      {tasks.every(task => task.completed) ? (
        <p>All items are completed!</p>
      ) : (
        <ul>
          {tasks
            .filter(task => !task.completed)
            .map((task, index) => (
              <li key={index}>{task.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}`;
  const resultElement = document.getElementById("lesson3-result");
  resultElement.textContent = `Correct Answer: ${correctCode}`;
  resultElement.style.color = "#1f78b4";
}
