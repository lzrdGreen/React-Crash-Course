function checkLesson6() {
    const userCode = document.getElementById("lesson6-code").value.trim();
  
    const correctCode = `
  import { useReducer } from "react";
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case "TOGGLE_TASK":
        return state.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      default:
        return state;
    }
  };
  
  function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
  
    const addTask = () => {
      const task = prompt("Enter a task:");
      if (task) {
        dispatch({ type: "ADD_TASK", payload: task });
      }
    };
  
    return (
      <div>
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
              <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
                Toggle
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson6-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer6() {
    const correctCode = `
  import { useReducer } from "react";
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case "TOGGLE_TASK":
        return state.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      default:
        return state;
    }
  };
  
  function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
  
    const addTask = () => {
      const task = prompt("Enter a task:");
      if (task) {
        dispatch({ type: "ADD_TASK", payload: task });
      }
    };
  
    return (
      <div>
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
              <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
                Toggle
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  `;
  
    const resultElement = document.getElementById("lesson6-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  