import React from 'react';
import './App.css';

const sendBackendRequest = async () => {
    const response = await fetch("http://localhost:3001/", {headers: {
        }});
    const text = await response.text();
    console.log(text);
}

sendBackendRequest();
export const App = () => {
    return (
        <div className="App">
            <h1>Hello there friend</h1>
        </div>
    )
}
