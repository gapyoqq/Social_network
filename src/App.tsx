import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import {ActionType, RootStateType, store} from "./redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}


function App(props: PropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs

                    newMessageText={props.state.messagesPage.newMessageText}
                    dispatch={props.dispatch.bind(store)}
                    dialogsData={props.state.messagesPage.dialogsData}
                                                              messagesData={props.state.messagesPage.messagesData}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch.bind(store)}
                />}/>
                {/*<Route path = '/news' component={Profile}/>
                <Route path = '/music' component={Profile}/>
                <Route path = '/settings' component={Profile}/>*/}
            </div>
        </div>

    );
}

export default App;
