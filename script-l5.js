

function checkQuiz5_1() {
  const userAnswer = document.getElementById("quiz1").value.trim();
  const correctAnswers = [
    "className", // Short answer
    `<div className="container"></div>`, // Full example from the hint
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

function checkQuiz5_2() {
  const userAnswer = document.getElementById("quiz2").value.trim();
  const correctAnswer = `{isLoading ? 'Loading...' : 'Data Loaded'}`;
  
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

function checkQuiz5_3() {
  const userAnswer = document.getElementById("quiz3").value.trim();
  const correctAnswer = `
items.map((item, index) => <li key={index}>{item}</li>)
`.replace(/[\s\n]+/g, " ");

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
Hint: In JSX, use <code>className</code> instead of <code>class</code>. Example:
<pre><code>&lt;div className="container"&gt;&lt;/div&gt;</code></pre>`;
      break;
    case "quiz2":
      resultElement.innerHTML = `
Hint: Use a ternary operator for conditional rendering:
<pre><code>{isLoading ? 'Loading...' : 'Data Loaded'}</code></pre>`;
      break;
    case "quiz3":
      resultElement.innerHTML = `
Hint: Use the <code>.map()</code> method with a key for each element:
<pre><code>items.map((item, index) => &lt;li key={index}&gt;{item}&lt;/li&gt;)</code></pre>`;
      break;
    default:
      resultElement.textContent = "Invalid quiz ID.";
  }
  resultElement.style.color = "#3288bd";
}
