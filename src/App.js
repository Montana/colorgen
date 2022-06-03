import React, { useState} from "react";
import SingleColor from "./SingleColor";
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [amount, setAmount] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#34eb34").all(10));

const handleSubmit = (e) => {
  e.preventDefault()
  try {
    //TODO: I dont know how to math, I need to figure out how to convert amount to a increment value
    let colors = new Values(color).all(parseInt(amount))
    setList(colors)
  } catch (error) {
    setError(true)
    console.log(error)
  }
}

  return (
  <>
  <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#34eb34"
          className={`${error ? 'error' : null}`}
        />
        <button
          className="btn"
          type="submit">
            SUBMIT
        </button>
        <h5>Increment out of 100</h5>
        <input
          type="number"
          defaultValue={20}
          value={amount}
        onChange={(e) => {
        if (e.target.value <= 0) {
        setAmount(1)
        } else {
        setAmount(e.target.value)
        }
        }}
        />
      </form>
  </section>

  <section className="colors">
      {list.map((color, index)=>{
        return <SingleColor
          key={index} {...color} 
          index={index}
          hexColor={color.hex}
          />
      })}
  </section>
  </>
  );
}

export default App;