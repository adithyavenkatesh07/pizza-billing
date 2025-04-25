import { useState } from "react";
import React from "react";

function App() {
  const [size, setSize] = useState("Large");
  const [toppings, setToppings] = useState([]);

  const prices = {
    small: 5,
    Med: 80,
    Large: 100,
    toppings: {
      mushroom: 1.5,
      cheese: 40,
      paneer: 100,
    },
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((t) => t !== value));
    }
  };

  const calculateTotal = () => {
    let total = prices[size];
    toppings.forEach((t) => {
      total += prices.toppings[t];
    });
    return total.toFixed(2);
  };

  return (
    <div
      style={{
        fontFamily:"sans-serif",
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9"
        
      }}
    >
      <h2 style={{ textAlign: "center" }}>🍕 Build Your Pizza🍔</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Choose Pizza Size:</h3>
        <label>
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
          />{" "}
          Small 🤏🍕 - ₹{prices.small}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="size"
            value="Med"
            checked={size === "Med"}
            onChange={(e) => setSize(e.target.value)}
          />{" "}
          Medium 🥺🍕 - ₹{prices.Med}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="size"
            value="Large"
            checked={size === "Large"}
            onChange={(e) => setSize(e.target.value)}
          />{" "}
          Large 🦣🍕 - ₹{prices.Large}
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Choose Toppings:</h3>
        <label>
          <input
            type="checkbox"
            value="mushroom"
            onChange={handleToppingChange}
            checked={toppings.includes("mushroom")}
          />{" "}
          🍄 Mushroom - ₹{prices.toppings.mushroom}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="cheese"
            onChange={handleToppingChange}
            checked={toppings.includes("cheese")}
          />{" "}
          🧀 Cheese - ₹{prices.toppings.cheese}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="paneer"
            onChange={handleToppingChange}
            checked={toppings.includes("paneer")}
          />{" "}
          🧊 Paneer - ₹{prices.toppings.paneer}
        </label>
      </div>

      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Total: ₹{calculateTotal()}
      </div>
    </div>
  );
}

export default App;
