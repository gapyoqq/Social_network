import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {DialogsDataType} from "./index";

type AppPropsType = {
    dialogsData: DialogsDataType[]
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render={()=> <Dialogs dialogsData={props.dialogsData}/>} />
                <Route path = '/profile' render={() => <Profile/>} />
                <Route path = '/news' component={Profile}/>
                <Route path = '/music' component={Profile}/>
                <Route path = '/settings' component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
