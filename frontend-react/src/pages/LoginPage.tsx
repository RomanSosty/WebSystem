import './loginPage.css'
import {useState} from "react";
import LoginButton from "../ui/LoginButton.tsx";

const LoginPage = () => {
    const [username, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <div className="form-container sign-in-container">
                <form id="loginForm">
                    <input type="text" value={username} placeholder="Uživatelské jméno"
                           onChange={(e) => setLogin(e.target.value)}/>
                    <input type="password" value={password} placeholder="Heslo"
                           onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <LoginButton loginData={{username, password}}/>
            </div>
        </div>
    );
}

export default LoginPage;