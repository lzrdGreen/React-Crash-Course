function checkLesson7() {
    const userCode = document.getElementById("lesson7-code").value.trim();
  
    const correctCode = `
  import { useEffect, useState } from "react";
  
  function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <div>Timer: {seconds}s</div>;
  }
  
  export default Timer;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson7-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer7() {
    const correctCode = `
  import { useEffect, useState } from "react";
  
  function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <div>Timer: {seconds}s</div>;
  }
  
  export default Timer;
  `;
  
    const resultElement = document.getElementById("lesson7-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  