import React from "react"
import './App.css';
import Header from "./components/Header.tsx/Header";
import Navbar from "./components/Header.tsx/Navbar";
import Profile from "./components/Header.tsx/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );

}

export default App;
