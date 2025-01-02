// Interactive Example: Fetch data using async/await
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('output').textContent = `Error: ${error.message}`;
    }
  }
  
  document.getElementById('fetchTodo').addEventListener('click', fetchTodo);
  