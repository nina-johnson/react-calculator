import React, {Component} from 'react';
import Axios from 'axios';

class PreviousCalculations extends Component {

    state = {
        history: [],
    }

    componentDidMount(){
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
        return(
            <div className="history" >
                <h2>Previous Calculations</h2>
                {this.state.history.map( calc => 
                        <p key={calc.id}>{calc.firstNum} {calc.operation} {calc.secondNum} = {calc.answer}</p>
                    )}
            </div>
        );
    }
}

export default PreviousCalculations;