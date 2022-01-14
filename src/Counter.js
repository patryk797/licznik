import React, { Component } from 'react';
import './Counter.css';
import './ButtonsPanel.css';

import Display from './Display'
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 0
        }
    }


    changeValue = (action) => {
        

        let currentCounterValue = this.state.counterValue;



        if (action === 'add') {
            currentCounterValue += 1;
        
        } else if (action === 'reinit') {
            currentCounterValue = this.props.initValue;
        
        } else {
            currentCounterValue = 0;
        }


        this.setState({
            counterValue: currentCounterValue
        }
        );

    }

        setStepValue = (inputValue) => {
            this.setState({stepValue: parseFloat(inputValue)})
        }


        buttonStepMethod = () => {
            this.setState((prevState) => {
                return ({counterValue: prevState.counterValue + this.state.stepValue})
            })
        }

    render() {

        // let randomNumber = Math.floor(Math.random() *(108 - 1 + 1) + 1);

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step buttonStepMethod={this.buttonStepMethod} stepValue={this.state.stepValue} updateStep={this.setStepValue} />

            </div>
        )
    }
}


// function Counter(props) {
//     return (
// <div className="counter">
//     Counter:
//     <span className="value">
//         108
//     </span>
// </div>
//     )
// }

export default Counter;