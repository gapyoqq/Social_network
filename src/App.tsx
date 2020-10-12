import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import {ActionType, RootStateType} from "./redux/store";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
    store: StoreType
}


function App(props: PropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                />}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}
                />
                {/*<Route path = '/news' component={Profile}/>
                <Route path = '/music' component={Profile}/>
                <Route path = '/settings' component={Profile}/>*/}
            </div>
        </div>

    );
}

export default App;
