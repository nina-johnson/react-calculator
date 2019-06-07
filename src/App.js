import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    firstNum: '',
    secondNum: '',
    operation: '',
    answer: ''
  }

  // function to store values in state
  handleValue = (event) => {
    event.preventDefault();
    console.log( `Button clicked:`, event.target.value );
    
    // conditionally set state based on whether an operator has been selected
    if( this.state.operation === '' ){
      this.setState({
        ...this.state, 
        firstNum: this.state.firstNum + event.target.value,
      })
    } else {
      this.setState({
        ...this.state, 
        secondNum: this.state.secondNum + event.target.value,
      })
    }

    console.log( `First number is:`, this.state.firstNum );
    console.log( `Second number is:`, this.state.secondNum );
  }

  // function stores selected operator in state
  handleOperation = (event) => {
    event.preventDefault();
    console.log( `Operation selected:`, event.target.value );
    this.setState({
      operation: event.target.value,
    })
  }

  // function to calculate the answer
  calculateAnswer = () => {
    console.log( `Ready to calculate total.` );

    if( this.state.operation === '+' ){
      let total = Number(this.state.firstNum) + Number(this.state.secondNum);

      this.setState({
        answer: total,
      })
    } else if( this.state.operation === '-' ){
      let total = Number(this.state.firstNum) - Number(this.state.secondNum);

      this.setState({
        answer: total,
      })
    } else if( this.state.operation === '*' ){
      let total = Number(this.state.firstNum) * Number(this.state.secondNum);

      this.setState({
        answer: total,
      })
    } else if( this.state.operation === '/' ){
      let total = Number(this.state.firstNum) / Number(this.state.secondNum);

      this.setState({
        answer: total,
      })
    }
  }

  render(){
    return (
      <div className="App">

        <div className="calculator" >
          <p className="display"> :{this.state.answer}</p>
          <br/>

          <button onClick={this.handleValue} value="7" >7</button>
          <button onClick={this.handleValue} value="8" >8</button>
          <button onClick={this.handleValue} value="9" >9</button>
          <button onClick={this.handleOperation} value="/" >/</button>
          <br/>

          <button onClick={this.handleValue} value="4" >4</button>
          <button onClick={this.handleValue} value="5" >5</button>
          <button onClick={this.handleValue} value="6" >6</button>
          <button onClick={this.handleOperation} value="*" >*</button>
          <br/>

          <button onClick={this.handleValue} value="1" >1</button>
          <button onClick={this.handleValue} value="2" >2</button>
          <button onClick={this.handleValue} value="3" >3</button>
          <button onClick={this.handleOperation} value="-" >-</button>
          <br/>

          <button onClick={this.handleValue} value="0" >0</button>
          <button onClick={this.handleValue} value="." >.</button>
          <button onClick={this.calculateAnswer} >=</button>
          <button onClick={this.handleOperation} value="+" >+</button>

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
