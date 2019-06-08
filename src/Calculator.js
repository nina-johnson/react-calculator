import React, {Component} from 'react';
import Axios from 'axios';
import ClearAllButton from './ClearAllButton';

class Calculator extends Component {

    state = {
        firstNum: '',
        secondNum: '',
        operation: '',
        answer: '',
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
    }

    // function stores selected operator in state
    handleOperation = (event) => {
        event.preventDefault();
        console.log( `Operation selected:`, event.target.value );

        if( this.state.answer === ''){
        this.setState({
            ...this.state,
            operation: event.target.value,
        })
        } else {
        this.setState({
            ...this.state, 
            firstNum: this.state.answer,
            secondNum: '',
            operation: event.target.value,
            answer: ''
        })
        }
    }

    // function to calculate the answer
    calculateAnswer = () => {
        console.log( `Ready to calculate total.` );
        let total;

        if( this.state.operation === '+' ){
        total = Number(this.state.firstNum) + Number(this.state.secondNum);
        this.setState({
            answer: total,
        })
        } else if( this.state.operation === '-' ){
        total = Number(this.state.firstNum) - Number(this.state.secondNum);
        this.setState({
            answer: total,
        })
        } else if( this.state.operation === '*' ){
        total = Number(this.state.firstNum) * Number(this.state.secondNum);
        this.setState({
            answer: total,
        })
        } else if( this.state.operation === '/' ){
        total = Number(this.state.firstNum) / Number(this.state.secondNum);
        this.setState({
            answer: total,
        })
        }

        this.saveCalculation(total);
    }

    // on click of "=" button, once answer is calculated, send calculation to database
    saveCalculation = (answer) => {
        let calculation = {
        firstNum: this.state.firstNum,
        operation: this.state.operation,
        secondNum: this.state.secondNum,
        answer: answer
        }

        Axios({
        method: 'POST',
        url: '/calculations',
        data: calculation
        })
        .then( (response) => {
        console.log( `Posted data successfully!` );
        this.props.getCalculations();
        })
        .catch( (error) => {
        console.log( `Couldn't add calculation.`, error );
        alert( `Sorry, couldn't add calculation. Please try again later.` );
        })
    }

    // on click of "C" button, state is reset
    clearState = () => {
        this.setState({
        firstNum: '',
        secondNum: '',
        operation: '',
        answer: ''
        })
    }

    render(){
        let display;
        if( this.state.answer === '' ){
          display = <span>{this.state.firstNum} {this.state.operation} {this.state.secondNum}</span>
        } else {
          display = <span>{this.state.answer}</span>
        }

        return(
            <div className="calculator" >
                <h4 className="header" >Sezzle Calculator</h4>
                <p className="display"> {display}</p>
                <br/>

                <ClearAllButton getCalculations={this.props.getCalculations} />
                <button className="clear" onClick={this.clearState} >C</button>
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

        );
    }
}

export default Calculator;