function checkLesson2() {
    const userCode = document.getElementById("lesson2-code").value.trim();
    const correctCode = `
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }`;
  
    const result = userCode.includes(correctCode.trim()) ? "Correct!" : "Try again!";
    document.getElementById("lesson2-result").textContent = result;
  }
  

  