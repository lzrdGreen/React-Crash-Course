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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}`;

  const normalize = (code) => code.replace(/\s+/g, " ").trim();

  const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
  const resultElement = document.getElementById("lesson4-result");

  resultElement.textContent = result;

  if (result === "Correct!") {
    resultElement.style.color = "#66c2a5";
  } else {
    resultElement.style.color = "#e31a1c";
  }
}

function revealAnswer4() {
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}`;
  const resultElement = document.getElementById("lesson4-result");
  resultElement.textContent = `Correct Answer: ${correctCode}`;
  resultElement.style.color = "#1f78b4";
}
