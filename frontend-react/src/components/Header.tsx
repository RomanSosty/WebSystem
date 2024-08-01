import {jwtDecode} from "jwt-decode";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Header.css";
import Button from "./Button.tsx";
import logoDDM from "../assets/logo_BARVA.png"

interface HeaderProps {
    buttonPath: string;
}

interface userJwt {
    sub: string,
    name: string,
    surname: string,
    roles: string,
    iat: number,
    exp: number
}

const Header: React.FC<HeaderProps> = ({buttonPath}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<userJwt>();

    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const path = e.currentTarget.getAttribute("href");
        if (path) {
            navigate(path, {
                state: {roles: userData?.roles}
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_name");
        setIsLoggedIn(false);
        window.location.reload();
    };

    useEffect(() => {
        const isLogged = localStorage.getItem("JWT");
        if (isLogged) {
            setIsLoggedIn(true);
            const decoded: userJwt = jwtDecode<userJwt>(isLogged);
            localStorage.setItem("user_role", decoded.roles)
            localStorage.setItem("user_name", decoded.sub)
            setUserData(decoded);
        }
    }, [setIsLoggedIn]);
    return (
        <div className="header">
            <img src={logoDDM} alt="Logo DDM" className="logo-ddm"/>
            <nav>
                <ul className="menu">

                    <li>
                        <a href="/" onClick={handleClick}>O nás</a>
                    </li>
                    <li className="dropdown">
                        <a href="" className="dropbtn">
                            Oddělení
                        </a>
                        <ul className="dropdown-content">
                            <li>
                                <a href="/prirodoveda" onClick={handleClick}>Přírodověda</a>
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
                                <a href="/tbc" onClick={handleClick}>TK TBC</a>
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
                </ul>
            </nav>
            {!isLoggedIn ? (
                <Button title="Přihlásit se" path={buttonPath}/>
            ) : (
                <Button title={userData?.name + " " + userData?.surname} path={"/"} onClick={handleLogout}/>
            )}
        </div>
    );
};

export default Header;
