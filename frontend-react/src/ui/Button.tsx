import './Button.css'
import React from "react";
import {useNavigate} from "react-router-dom";


interface ButtonProps {
    title: string;
    path: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, path, onClick}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (onClick) {
            onClick();
            navigate(path)
        } else {
            navigate(path)
        }
    }

    return (
        <button onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;