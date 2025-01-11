function checkLesson12() {
    const userCode = document.getElementById("lesson12-code").value.trim();
  
    const correctCode = `
  import React from 'react';
  import styles from './Navbar.module.css';
  import styled from 'styled-components';
  
  // CSS Module Styling
  // Navbar.module.css
  /*
  .navbar {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .nav-item {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  
  .nav-item:hover {
    background-color: #555;
  }
  */
  
  // Styled-Components Styling
  const NavbarWrapper = styled.div\`
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  \`;
  
  const NavItem = styled.a\`
    color: white;
    text-decoration: none;
    padding: 10px;
  
    &:hover {
      background-color: #555;
    }
  \`;
  
  function Navbar() {
    return (
      <NavbarWrapper className={styles.navbar}>
        <NavItem href="/" className={styles.navItem}>Home</NavItem>
        <NavItem href="/about" className={styles.navItem}>About</NavItem>
        <NavItem href="/contact" className={styles.navItem}>Contact</NavItem>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson12-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "#e31a1c";
    }
  }
  
  function revealAnswer12() {
    const correctCode = `
  import React from 'react';
  import styles from './Navbar.module.css';
  import styled from 'styled-components';
  
  // CSS Module Styling
  // Navbar.module.css
  /*
  .navbar {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .nav-item {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  
  .nav-item:hover {
    background-color: #555;
  }
  */
  
  // Styled-Components Styling
  const NavbarWrapper = styled.div\`
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  \`;
  
  const NavItem = styled.a\`
    color: white;
    text-decoration: none;
    padding: 10px;
  
    &:hover {
      background-color: #555;
    }
  \`;
  
  function Navbar() {
    return (
      <NavbarWrapper className={styles.navbar}>
        <NavItem href="/" className={styles.navItem}>Home</NavItem>
        <NavItem href="/about" className={styles.navItem}>About</NavItem>
        <NavItem href="/contact" className={styles.navItem}>Contact</NavItem>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;
  `;
  
    const resultElement = document.getElementById("lesson12-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#1f78b4";
  }
  