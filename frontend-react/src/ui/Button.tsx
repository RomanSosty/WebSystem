import './Button.css'
import React from "react";
import {useNavigate} from "react-router-dom";


interface ButtonProps{
    title: string;
    path: string;
    loginData?: {username: string, password: string};
}
const Button: React.FC<ButtonProps> = ({title, path, loginData}) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        if (loginData) {
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
                    navigate(path);
                } else {
                    console.error(response);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        } else {
            console.log("Není login")
            navigate(path);
        }
    }

    return(
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;