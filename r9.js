function checkLesson9() {
    const userCode = document.getElementById("lesson9-code").value.trim();
  
    const correctCode = `
  import { useState, useEffect } from "react";
  
  function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  
  export default Posts;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson9-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer9() {
    const correctCode = `
  import { useState, useEffect } from "react";
  
  function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  
  export default Posts;
  `;
  
    const resultElement = document.getElementById("lesson9-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  