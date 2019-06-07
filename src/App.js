import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="calculator" >
        <button className="num" >7</button>
        <button className="num" >8</button>
        <button className="num" >9</button>
        <button className="operation" >/</button>
        <br/>

        <button className="num" >4</button>
        <button className="num" >5</button>
        <button className="num" >6</button>
        <button className="operation" >*</button>
        <br/>

        <button className="num" >1</button>
        <button className="num" >2</button>
        <button className="num" >3</button>
        <button className="operation" >-</button>
        <br/>

        <button className="num" >0</button>
        <button className="num" >.</button>
        <button className="num" >=</button>
        <button className="operation" >+</button>

      </div>
    </div>
  );
}

export default App;
