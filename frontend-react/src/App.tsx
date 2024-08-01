import './App.css'
import Header from "./components/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage.tsx";
import TkJoyPage from "./pages/TkJoyPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import TBCPage from "./pages/TBCPage.tsx";
import PrirodovedaPage from "./pages/PrirodovedaPage.tsx";

const Home: React.FC = () => <HomePage/>
const Login: React.FC = () => <LoginPage/>
const TkJoy: React.FC = () => <TkJoyPage/>
const TBC: React.FC = () => <TBCPage/>
const PRIRODOVEDA: React.FC = () => <PrirodovedaPage/>

const App: React.FC = () => {


    return (
        <Router>
            <Header buttonPath="/login"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tkjoy" element={<TkJoy/>}/>
                <Route path="/tbc" element={<TBC/>}/>
                <Route path="/prirodoveda" element={<PRIRODOVEDA/>}/>
            </Routes>
        </Router>
    )
}

export default App
