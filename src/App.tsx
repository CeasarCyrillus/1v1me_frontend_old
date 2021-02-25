import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className={"app"}>
            <h1>1v1 me</h1>

            <input className={"addressInput"} data-testid={"address-input"} type={"text"} placeholder={"nano address"} />
            <br />

            <input className={"betAmountInput"} data-testid={"bet-amount-input"} type={"number"} placeholder={"bet amount"} />
            <br />

            <button className={"create1v1Button"} data-testid={"create-1v1-button"}>
                Create 1v1
            </button>
        </div>
    )
}
