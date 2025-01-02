// Interactive Example: Filter completed tasks
const tasks = [
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Deploy app', completed: false },
  ];
  
  document.getElementById('filterTasks').addEventListener('click', () => {
    const completedTasks = tasks.filter(task => task.completed);
    document.getElementById('output').textContent = JSON.stringify(completedTasks, null, 2);
  });
  