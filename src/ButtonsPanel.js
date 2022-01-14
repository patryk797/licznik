import React from 'react';

import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="ButtonsPanel">
            <button onClick={() => {props.buttonMethod('add')}}>Add</button>
            <button onClick={() => {props.buttonMethod('reinit')}}>ReInit</button>
            <button onClick={() => {props.buttonMethod('reset')}}>Reset</button>
        </div>
    );
}


export default ButtonsPanel;