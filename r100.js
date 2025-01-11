function checkLesson1() { 
    const userCode = document.getElementById("lesson1-code").value.trim();
    const correctCode = `
  export function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  import { Greeting } from './Greeting';
  
  function App() {
    return <Greeting name="React Learner" />;
  }`;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson1-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "#e31a1c";
    }
  }
  
  function revealAnswer() {
    const correctCode = `
  export function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  import { Greeting } from './Greeting';
  
  function App() {
    return <Greeting name="React Learner" />;
  }`;
    
    const resultElement = document.getElementById("lesson1-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#1f78b4";
  }
  