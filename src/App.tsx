import React from 'react';
import './App.css';
import {Provider, useDispatch, useSelector} from 'react-redux'
import {RootState, store} from './store';

const sendBackendRequest = async () => {
    const response = await fetch("http://localhost:3001/", {
        headers: {}
    });
    const text = await response.text();
    console.log(text);
}

const connectToWs = () => {
    const ws = new WebSocket("wss://ws.mynano.ninja/");
    ws.addEventListener("open", (event) => {
        console.log(event);
        ws.send(JSON.stringify({
            "action": "subscribe",
            "topic": "confirmation",
            "ack": true,
        }))
    });

    ws.addEventListener("message", (message) => {
        console.log(message);
    })
}
export const App = () => {
    return (
        <div className="App">
            <h1>Hello there friend</h1>
        </div>
    )
}
