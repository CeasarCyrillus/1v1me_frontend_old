import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createAppStore} from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={createAppStore()}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);