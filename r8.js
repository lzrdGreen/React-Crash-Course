function checkLesson8() {
    const userCode = document.getElementById("lesson8-code").value.trim();
  
    const correctCode = `
  import { useState } from "react";
  
  function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 8;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setError("Invalid email address");
        return;
      }
      if (!validatePassword(password)) {
        setError("Password must be at least 8 characters long");
        return;
      }
      setError("");
      alert("Signup successful!");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
    );
  }
  
  export default SignupForm;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson8-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer8() {
    const correctCode = `
  import { useState } from "react";
  
  function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 8;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setError("Invalid email address");
        return;
      }
      if (!validatePassword(password)) {
        setError("Password must be at least 8 characters long");
        return;
      }
      setError("");
      alert("Signup successful!");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
    );
  }
  
  export default SignupForm;
  `;
  
    const resultElement = document.getElementById("lesson8-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  