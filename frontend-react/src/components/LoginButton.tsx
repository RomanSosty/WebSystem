import Button from "./Button.tsx";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './LoginButton.css'

interface LoginButtonProps {
    loginData?: { username: string, password: string };

}

const LoginButton: React.FC<LoginButtonProps> = ({loginData}) => {
    const navigate = useNavigate();
    const [isWrongLoginData, setIsWrongLoginData] = useState<boolean | null>();

    const handleFetch = async () => {
        try {
            const response = await fetch('http://localhost:8080/authAndGenerateToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
                credentials: "include",
            });

            if (response.ok) {
                localStorage.setItem("JWT", await response.text());
                setIsWrongLoginData(false);
                window.location.reload();
            } else if (response.status === 403) {
                //TODO: chybová hláška
                setIsWrongLoginData(true);
                console.log("Nesprávný uživatel nebo heslo")
                navigate("/login")
                return
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    return (<div>
            {isWrongLoginData ? (<p className={"error-message"}>Neplatné přihlašovací údaje !</p>) : (<p></p>)}
            <Button title="Přihlásit se" path={"/"} onClick={handleFetch}/>
        </div>
    );
};
export default LoginButton;