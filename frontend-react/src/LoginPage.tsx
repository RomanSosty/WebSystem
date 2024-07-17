import './loginPage.css'
import Button from "./ui/Button.tsx";
import {useState} from "react";

const LoginPage = () => {
    const[username, setLogin] = useState('');
    const[password, setPassword] = useState('');

    return (
        <div className="container" >
            <div className="form-container sign-in-container">
                <form id="loginForm">
                    <input type="text" value={username} placeholder="Uživatelské jméno"
                           onChange={(e) => setLogin(e.target.value)}/>
                    <input type="password" value={password} placeholder="Heslo"
                           onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <Button title="Přihlásit se" path={"/"} loginData={{username, password}}/>
            </div>
        </div>
    );
}

export default LoginPage;