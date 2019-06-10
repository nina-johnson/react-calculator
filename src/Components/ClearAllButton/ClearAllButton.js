import React, {Component} from 'react';
import axios from 'axios';

class ClearAllButton extends Component {

    clearAllCalculations = () => {
        axios({
            method: 'DELETE',
            url: '/calculations'
        })
        .then( (response) => {
            console.log( `Removed all previous calculations.` );
            this.props.getCalculations();
        })
        .catch( (error) => {
            console.log( `Couldn't remove previous calculations.` );
            alert( `Sorry, could not clear previous calculations. Please try again later.` );
        })

        this.props.clearState();
    }

    render() {
        return(
            <button className="clear" onClick={this.clearAllCalculations} >AC</button>
        );
    }
}

export default ClearAllButton;