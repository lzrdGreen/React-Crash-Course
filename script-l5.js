// Interactive Example: Conditional rendering
let isLoggedIn = false;

document.getElementById('toggle').addEventListener('click', () => {
  isLoggedIn = !isLoggedIn;
  const output = isLoggedIn ? 'Welcome, User!' : 'Please log in.';
  document.getElementById('output').textContent = output;
});
