import {jwtDecode} from "jwt-decode";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Header.css";
import Button from "./ui/Button.tsx";

interface HeaderProps {
    buttonPath: string;
}

interface userJwt{
    sub: string,
    iat: number,
    exp: number
}

const Header: React.FC<HeaderProps> = ({buttonPath}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<userJwt>();

    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const path = e.currentTarget.getAttribute("href");
        if (path) {
            navigate(path);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const isLogged = localStorage.getItem("JWT");
        if (isLogged) {
            setIsLoggedIn(true);
            const decoded: userJwt = jwtDecode<userJwt>(isLogged);
            setUserData(decoded);
        }
    }, [setIsLoggedIn]);
    return (
        <div className="header">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="index.html">O nás</a>
                    </li>
                    <li className="dropdown">
                        <a href="" className="dropbtn">
                            Oddělení
                        </a>
                        <ul className="dropdown-content">
                            <li>
                                <a href="index.html">Přírodověda</a>
                            </li>
                            <li>
                                <a href="/tkjoy" onClick={handleClick}>
                                    TK JOY
                                </a>
                            </li>
                            <li>
                                <a href="index.html">Tělovýchova</a>
                            </li>
                            <li>
                                <a href="index.html">TK TBC</a>
                            </li>
                            <li>
                                <a href="index.html">Estetika</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html">Koužky a kurzy</a>
                    </li>
                    <li>
                        <a href="index.html">Tábory 2024</a>
                    </li>
                    <li>
                        <a href="index.html">Aktuality a akce</a>
                    </li>
                    <li>
                        <a href="index.html">Odloučená pracoviště</a>
                    </li>
                    <li>
                        {!isLoggedIn ? (
                            <Button title="Přihlásit se" path={buttonPath}/>
                        ) : (
                            <Button title={"Přihlášen: " + userData?.sub} path={"/"} onClick={handleLogout}/>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
