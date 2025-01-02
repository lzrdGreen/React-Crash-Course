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
  
    const result = userCode.includes(correctCode.trim()) ? "Correct!" : "Try again!";
    document.getElementById("lesson3-result").textContent = result;
  }

  