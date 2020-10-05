import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";

export type DialogsDataType = {
    id: number
    name: string
}




 let dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Svetlana'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Petr'},
    {id: 5, name: 'Maxim'}
]
let messagesData = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'Love you)'},
    {id: 3, message: 'Np'},

]

ReactDOM.render(
    <App dialogsData={dialogsData} />, document.getElementById('root')
);


serviceWorker.unregister();
