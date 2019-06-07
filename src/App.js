import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    firstNum: '',
    secondNum: '',
    answer: ''
  }

  calculateAnswer = () => {
    // this will be a function that does the calculation.
  }

  render(){
    return (
      <div className="App">

        <div className="calculator" >
          <p className="display">Answer</p>
          <br/>

          <button className="num" value="7" >7</button>
          <button className="num" value="8" >8</button>
          <button className="num" value="9" >9</button>
          <button className="operation" value="/" >/</button>
          <br/>

          <button className="num" value="4" >4</button>
          <button className="num" value="5" >5</button>
          <button className="num" value="6" >6</button>
          <button className="operation" value="*" >*</button>
          <br/>

          <button className="num" value="1" >1</button>
          <button className="num" value="2" >2</button>
          <button className="num" value="3" >3</button>
          <button className="operation" value="-" >-</button>
          <br/>

          <button className="num" value="0" >0</button>
          <button className="num" value="." >.</button>
          <button onClick={this.calculateAnswer} >=</button>
          <button className="operation" value="+" >+</button>

        </div>

        <div className="history" >
          <h2>Previous Calculations</h2>
          {/* Map through answers here */}
        </div>
      </div>
    );
  }
}

export default App;
