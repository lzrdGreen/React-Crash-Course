function checkLesson10() {
    const userCode = document.getElementById("lesson10-code").value.trim();
  
    const correctCode = `
  import { Component } from "react";
  
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, info) {
      console.error("Error logged:", error, info);
    }
  
    retry = () => {
      this.setState({ hasError: false, error: null });
    };
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <p>Something went wrong.</p>
            <button onClick={this.retry}>Retry</button>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson10-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer10() {
    const correctCode = `
  import { Component } from "react";
  
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, info) {
      console.error("Error logged:", error, info);
    }
  
    retry = () => {
      this.setState({ hasError: false, error: null });
    };
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <p>Something went wrong.</p>
            <button onClick={this.retry}>Retry</button>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  `;
  
    const resultElement = document.getElementById("lesson10-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  