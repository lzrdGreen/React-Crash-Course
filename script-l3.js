// Interactive Example: Filter completed tasks
const tasks = [
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Deploy app', completed: false },
  ];
  
  document.getElementById('filterTasks').addEventListener('click', () => {
    const completedTasks = tasks.filter(task => task.completed);
    document.getElementById('output').textContent = JSON.stringify(completedTasks, null, 2);
  });
  
  function checkQuiz3_1() {
    const userAnswer = document.getElementById("quiz1").value.trim();
    const correctAnswers = [
      "const { city } = { street: 'Main St', city: 'Anytown' };",
      "const { city } = {street: 'Main St', city: 'Anytown'};"
    ];
  
    const resultElement = document.getElementById("quiz1-result");
    if (correctAnswers.includes(userAnswer)) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
    }
  }
  
  function checkQuiz3_2() {
    const userAnswer = document.getElementById("quiz2").value.trim();
    const correctAnswer = `const squares = [1, 2, 3, 4].map(num => num * num);`;
  
    const normalize = (code) => code.replace(/[\s\n]+/g, " ").trim();
    const resultElement = document.getElementById("quiz2-result");
    if (normalize(userAnswer) === normalize(correctAnswer)) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
    }
  }
  
  function checkQuiz3_3() {
    const userAnswer = document.getElementById("quiz3").value.trim();
    const correctAnswer = `const copy = [...array];`;
  
    const normalize = (code) => code.replace(/[\s\n]+/g, " ").trim();
    const resultElement = document.getElementById("quiz3-result");
    if (normalize(userAnswer) === normalize(correctAnswer)) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer(quizId) {
    const resultElement = document.getElementById(`${quizId}-result`);
  
    switch (quizId) {
      case "quiz1":
        resultElement.innerHTML = `
  Hint: Use destructuring to extract the city property:
  <pre><code>
  const { city } = { street: 'Main St', city: 'Anytown' };
  </code></pre>`;
        break;
      case "quiz2":
        resultElement.innerHTML = `
  Hint: Use the map method to create the squares array:
  <pre><code>
  const squares = [1, 2, 3, 4].map(num => num * num);
  </code></pre>`;
        break;
      case "quiz3":
        resultElement.innerHTML = `
  Hint: Use the spread operator to create a shallow copy:
  <pre><code>
  const copy = [...array];
  </code></pre>`;
        break;
      default:
        resultElement.textContent = "Invalid quiz ID.";
    }
    resultElement.style.color = "#3288bd";
  }
  