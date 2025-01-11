function checkQuiz1() {
  const userAnswer = document.getElementById('quiz1').value.trim();
  const correctAnswer = "const square = (num) => num * num;";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz1-result');
  resultElement.textContent = result;
  resultElement.style.color = userAnswer === correctAnswer ? "#b2df8a" : "#e31a1c";
}

function checkQuiz2() {
  const userAnswer = document.getElementById('quiz2').value.trim();
  const correctAnswer = `const greet = (name = "Guest") => \`Hello, \${name}\`;`;

  const normalize = (code) => code.replace(/[\s\n]+/g, " ").replace(/['"]/g, '"').trim();
  
  const result = normalize(userAnswer) === normalize(correctAnswer) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz2-result');
  resultElement.textContent = result;
  resultElement.style.color = normalize(userAnswer) === normalize(correctAnswer) ? "#b2df8a" : "#e31a1c";
}

function checkQuiz3() {
  const userAnswer = document.getElementById('quiz3').value.trim();
  const correctAnswer = "`The product of 5 and 10 is ${5 * 10}`";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz3-result');
  resultElement.textContent = result;
  resultElement.style.color = userAnswer === correctAnswer ? "#b2df8a" : "#e31a1c";
}

// New function to reveal the correct answer
function revealAnswer(quizId, correctAnswer) {
  const resultElement = document.getElementById(`${quizId}-result`);
  resultElement.textContent = `The correct answer is: ${correctAnswer}`;
  resultElement.style.color = "#1f78b4";  
}
