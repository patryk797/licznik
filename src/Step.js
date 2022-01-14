import React, { Component } from 'react';
import './Step.css';


class Step extends Component {

    // setValue = () => {
    //     this.props.updateStep();
    // }

    render() {

        console.log(this.props);

        return (
            <div className="step">

                
                <span onClick={this.props.buttonStepMethod}>Krok </span>
                <input type="number" value={this.props.stepValue} onChange={(e) => this.props.updateStep(e.target.value)} />

                


            </div >

        );
    }
}



export default Step;
