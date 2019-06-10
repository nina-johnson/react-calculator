import React, {Component} from 'react';
import './App.css';
// import PreviousCalculations from './PreviousCalculations';
import Axios from 'axios';
import Calculator from '../Calculator/Calculator';

class App extends Component {

  state = {
    history: []
  }

  // on load of application, get prior calculations from database
  componentDidMount(){
    this.getCalculations();

    this.interval = setInterval(this.getCalculations, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // request to get calculations from database to display in history
  getCalculations = () => {
    Axios({
      method: 'GET',
      url: '/calculations'
    })
    .then( (response) => {
        console.log( `Received previous calculations:`, response.data );
        this.setState({
            history: response.data
        })
    })
    .catch( (error) => {
        console.log( `Error getting previous calculations.`, error );
        alert( `Sorry, could not get data at this time. Please try again later.` );
    })
  }

  render(){

    return (
      <div className="App">

        <Calculator getCalculations={this.getCalculations} /> 

        <div className="history" >
          <h2>Previous Calculations</h2>
          {this.state.history.map( calc => 
                  <p key={calc.id}>{calc.firstNum} {calc.operation} {calc.secondNum} = {calc.answer}</p>
              )}
        </div>
      </div>
    );
  }
}

export default App;
