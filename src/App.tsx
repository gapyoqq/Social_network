import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPostCallback: () => void
    UpdateNewPostText: (newText: string) => void
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                                                  messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPostCallback={props.addPostCallback}
                                                                  UpdateNewPostText={props.UpdateNewPostText}
                    />}/>
                    {/*<Route path = '/news' component={Profile}/>
                <Route path = '/music' component={Profile}/>
                <Route path = '/settings' component={Profile}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
