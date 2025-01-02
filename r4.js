function checkLesson4() {
    const userCode = document.getElementById("lesson4-code").value.trim();
    const correctCode = `
  function Contact() {
    return <h1>Contact Page</h1>;
  }
  
  function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }`;
  
    const result = userCode.includes(correctCode.trim()) ? "Correct!" : "Try again!";
    document.getElementById("lesson4-result").textContent = result;
  }

  