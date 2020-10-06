import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {addPostCallback, RootStateType, state, UpdateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state}
             UpdateNewPostText={UpdateNewPostText}
             addPostCallback={addPostCallback}/>, document.getElementById('root'))

}

rerenderEntireTree(state)



serviceWorker.unregister();
