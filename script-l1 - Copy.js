function checkQuiz1() {
    const userAnswer = document.getElementById('quiz1').value.trim();
    const correctAnswer = "const square = (num) => num * num;";
    const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
    document.getElementById('quiz1-result').textContent = result;
  }
  
  function checkQuiz2() {
    const userAnswer = document.getElementById('quiz2').value.trim();
    const correctAnswer = "const greet = (name = 'Guest') => `Hello, ${name}`;";
    const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
    document.getElementById('quiz2-result').textContent = result;
  }
  
  function checkQuiz3() {
    const userAnswer = document.getElementById('quiz3').value.trim();
    const correctAnswer = "`The product of 5 and 10 is ${5 * 10}`";
    const result = userAnswer === correctAnswer ? "Correct!" : "Try again!";
    document.getElementById('quiz3-result').textContent = result;
  }
  