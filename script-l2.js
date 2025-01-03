function checkQuiz2_1() {
  const userAnswer = document.getElementById("quiz1").value.trim();
  const correctAnswers = [
      "document.getElementById('container')",
      'document.getElementById("container")'
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

function checkQuiz2_2() {
  const userAnswer = document.getElementById("quiz2").value.trim();
  const correctAnswer = `
const newListItem = document.createElement('li');
newListItem.textContent = 'New Item';
newListItem.classList.add('highlight');
const myList = document.getElementById('myList');
myList.appendChild(newListItem);`;

  // Improved normalization to remove all whitespace and line breaks
  const normalize = (code) =>
      code.replace(/[\s\n]+/g, " ").trim();

  const resultElement = document.getElementById("quiz2-result");
  if (normalize(userAnswer) === normalize(correctAnswer)) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
  } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
  }
}


function checkQuiz2_3() {
  const userAnswer = document.getElementById("quiz3").value.trim();
  const correctAnswer = `
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function() {
  alert('Button Clicked!');
});`;

  const normalize = (code) => code.replace(/\s+/g, " ").trim();
  const resultElement = document.getElementById("quiz3-result");
  if (normalize(userAnswer) === normalize(correctAnswer)) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#66c2a5";
  } else {
      resultElement.textContent = "Try again!";
      resultElement.style.color = "red";
  }
}

function revealAnswer(quizId, partialAnswer) {
  const resultElement = document.getElementById(`${quizId}-result`);

  switch (quizId) {
      case "quiz1":
          resultElement.innerHTML = "Hint: Use <code>document.getElementById('container')</code> to select the element.";
          break;
          case "quiz2":
            resultElement.innerHTML = `
        Hint: Here's the code to create the new list item:
        <pre><code>const newListItem = document.createElement('li');
        newListItem.textContent = 'New Item';
        newListItem.classList.add('highlight');
        const myList = document.getElementById('myList');
        myList.appendChild(newListItem);
        </code></pre>`;
            break;
        
      case "quiz3":
          resultElement.innerHTML = `
Hint: Here's how to add a click event listener:
<pre><code>
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function() {
  alert('Button Clicked!');
});
</code></pre>`;
          break;
      default:
          resultElement.textContent = "Invalid quiz ID.";
  }
  resultElement.style.color = "#3288bd";
}
