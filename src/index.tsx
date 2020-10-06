import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {addPostCallback, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state}
             updateNewPostText={updateNewPostText}
             addPostCallback={addPostCallback}/>, document.getElementById('root'))

}

rerenderEntireTree()

subscribe(rerenderEntireTree)

serviceWorker.unregister();
