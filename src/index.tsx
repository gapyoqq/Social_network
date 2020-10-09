import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addPostCallback={store.addPostCallback.bind(store)}/>, document.getElementById('root'))

}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
