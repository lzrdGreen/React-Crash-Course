function checkLesson5() {
    const userCode = document.getElementById("lesson5-code").value.trim();
    const correctCode = `
  function ListItem({ item, onUpdate }) {
    return (
      <li>
        {item} <button onClick={onUpdate}>Update</button>
      </li>
    );
  }
  
  function App() {
    const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);
  
    const updateItem = (index) => {
      const newItems = [...items];
      newItems[index] = newItems[index] + " (updated)";
      setItems(newItems);
    };
  
    return (
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onUpdate={() => updateItem(index)}
          />
        ))}
      </ul>
    );
  }
  `;
  
    const normalize = (code) => code.replace(/\s+/g, " ").trim();
  
    const result = normalize(userCode) === normalize(correctCode) ? "Correct!" : "Try again!";
    const resultElement = document.getElementById("lesson5-result");
  
    resultElement.textContent = result;
  
    if (result === "Correct!") {
      resultElement.style.color = "#66c2a5";
    } else {
      resultElement.style.color = "red";
    }
  }
  
  function revealAnswer5() {
    const correctCode = `
  function ListItem({ item, onUpdate }) {
    return (
      <li>
        {item} <button onClick={onUpdate}>Update</button>
      </li>
    );
  }
  
  function App() {
    const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);
  
    const updateItem = (index) => {
      const newItems = [...items];
      newItems[index] = newItems[index] + " (updated)";
      setItems(newItems);
    };
  
    return (
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onUpdate={() => updateItem(index)}
          />
        ))}
      </ul>
    );
  }
  `;
    const resultElement = document.getElementById("lesson5-result");
    resultElement.textContent = `Correct Answer: ${correctCode}`;
    resultElement.style.color = "#3288bd";
  }
  