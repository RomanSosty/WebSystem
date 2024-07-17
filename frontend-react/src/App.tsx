import './App.css'
import Header from "./Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./LoginPage.tsx";

const Home: React.FC = () => <div>Home Page</div>
const Login: React.FC = () => <LoginPage/>

const App: React.FC = () => {


  return (
      <Router>
          <Header buttonPath="/login"/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
  )
}

export default App
