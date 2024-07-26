import './App.css'
import Header from "./components/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage.tsx";
import TkJoyPage from "./pages/TkJoyPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const Home: React.FC = () => <HomePage/>
const Login: React.FC = () => <LoginPage/>
const TkJoy: React.FC = () => <TkJoyPage/>

const App: React.FC = () => {


    return (
        <Router>
            <Header buttonPath="/login"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tkjoy" element={<TkJoy/>}/>
            </Routes>
        </Router>
    )
}

export default App
