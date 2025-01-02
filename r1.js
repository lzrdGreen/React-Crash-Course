function checkLesson1() {
    const userCode = document.getElementById("lesson1-code").value.trim();
    const correctCode = `
  function Welcome(props) {
    return <h1>Welcome to React!</h1>;
  }`;
  
    const result = userCode.includes(correctCode.trim()) ? "Correct!" : "Try again!";
    document.getElementById("lesson1-result").textContent = result;
  }

  
  