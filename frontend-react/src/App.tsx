import './App.css'
import Header from "./Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage.tsx";
import TkJoyPage from "./pages/TkJoyPage.tsx";
import SucessPage from "./pages/SucessPage.tsx";

const Home: React.FC = () => <div>Home Page</div>
const Login: React.FC = () => <LoginPage/>
const TkJoy: React.FC = () => <TkJoyPage/>
const Sucess: React.FC = () => <SucessPage/>

const App: React.FC = () => {


    return (
        <Router>
            <Header buttonPath="/login"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tkjoy" element={<TkJoy/>}/>
                <Route path="/sucess" element={<Sucess/>}/>
            </Routes>
        </Router>
    )
}

export default App
