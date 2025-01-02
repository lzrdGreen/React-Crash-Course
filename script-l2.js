// Interactive Example: Change paragraph text on button click
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
  paragraph.textContent = 'Button Clicked!';
});

// Quiz Checking Functions
function checkQuiz2_1() {
  const userAnswer = document.getElementById('quiz1').value.trim();
  const correctAnswer = "document.getElementById('container')";
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  document.getElementById('quiz1-result').textContent = result;
}

function checkQuiz2_2() {
  const userAnswer = document.getElementById('quiz2').value.trim();
  const correctAnswer = `
const ul = document.getElementById('myList');
const li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li);`.trim();
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  document.getElementById('quiz2-result').textContent = result;
}

function checkQuiz2_3() {
  const userAnswer = document.getElementById('quiz3').value.trim();
  const correctAnswer = `
const button = document.getElementById('submitBtn');
button.addEventListener('click', () => {
  // Your code here
});`.trim();
  const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
  document.getElementById('quiz3-result').textContent = result;
}
