function checkQuiz1() {
  const userAnswer = document.getElementById('quiz1').value.trim();
  const correctAnswer = "const square = (num) => num * num;";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz1-result');
  resultElement.textContent = result;
  resultElement.style.color = userAnswer === correctAnswer ? "#66c2a5" : "red";
}

function checkQuiz2() {
  const userAnswer = document.getElementById('quiz2').value.trim();
  const correctAnswer = "const greet = (name = 'Guest') => `Hello, ${name}`;";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz2-result');
  resultElement.textContent = result;
  resultElement.style.color = userAnswer === correctAnswer ? "#66c2a5" : "red";
}

function checkQuiz3() {
  const userAnswer = document.getElementById('quiz3').value.trim();
  const correctAnswer = "`The product of 5 and 10 is ${5 * 10}`";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  const resultElement = document.getElementById('quiz3-result');
  resultElement.textContent = result;
  resultElement.style.color = userAnswer === correctAnswer ? "#66c2a5" : "red";
}

// New function to reveal the correct answer
function revealAnswer(quizId, correctAnswer) {
  const resultElement = document.getElementById(`${quizId}-result`);
  resultElement.textContent = `The correct answer is: ${correctAnswer}`;
  resultElement.style.color = "#3288bd";  
}
