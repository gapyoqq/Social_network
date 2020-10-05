import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {state} from "./redux/state";




ReactDOM.render(
    <App state={state} />, document.getElementById('root')
);


serviceWorker.unregister();
