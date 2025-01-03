// Interactive Example: Fetch data using async/await
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('output').textContent = `Error: ${error.message}`;
    }
  }
  
  document.getElementById('fetchTodo').addEventListener('click', fetchTodo);

  function checkQuiz4_1() {
    const userAnswer = document.getElementById("quiz1").value.trim().toLowerCase();
    const correctAnswers = [
      "promise.then(value => { console.log(value); });",
      "promise.then(value => console.log(value));"
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
  
  function checkQuiz4_2() {
    const userAnswer = document.getElementById("quiz2").value.trim();
    const correctAnswers = [
      "async function fetchData() { return 'data'; }",
      `async function fetchData() { 
        return 'data'; 
      }`.replace(/\s+/g, " ")
    ];
  
    const resultElement = document.getElementById("quiz2-result");
    if (correctAnswers.includes(userAnswer.replace(/\s+/g, " "))) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
    }
  }
  
  function checkQuiz4_3() {
    const userAnswer = document.getElementById("quiz3").value.trim();
    const correctAnswer = `try {
      await someAsyncFunction();
    } catch (error) {
      console.error(error);
    }`.replace(/\s+/g, " ");
  
    const resultElement = document.getElementById("quiz3-result");
    if (userAnswer.replace(/\s+/g, " ") === correctAnswer) {
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
  Hint: <code>.then()</code> is used to handle the resolved value of a promise:
  <pre><code>
  promise.then(value => { console.log(value); });
  </code></pre>`;
        break;
      case "quiz2":
        resultElement.innerHTML = `
  Hint: The <code>async</code> keyword makes a function return a promise:
  <pre><code>
  async function fetchData() {
    return 'data';
  }
  </code></pre>`;
        break;
      case "quiz3":
        resultElement.innerHTML = `
  Hint: Use <code>try...catch</code> to handle errors in async/await:
  <pre><code>
  try {
    await someAsyncFunction();
  } catch (error) {
    console.error(error);
  }
  </code></pre>`;
        break;
      default:
        resultElement.textContent = "Invalid quiz ID.";
    }
    resultElement.style.color = "#3288bd";
  }
  