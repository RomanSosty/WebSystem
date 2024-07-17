import './Header.css'
import Button from "./ui/Button.tsx";
import React from "react";

interface HeaderProps{
    buttonPath: string;
}

const Header: React.FC<HeaderProps> = ({buttonPath}) => {
    return (
        <div className="header">
            <nav>
                <ul className="menu">
                    <li><a href="index.html">O nás</a></li>
                    <li className="dropdown">
                        <a href="" className="dropbtn">Oddělení</a>
                        <ul className="dropdown-content">
                            <li><a href="index.html">Přírodověda</a></li>
                            <li><a href="index.html">TK TBC</a></li>
                            <li><a href="index.html">Tělovýchova</a></li>
                            <li><a href="index.html">TK JOY</a></li>
                            <li><a href="index.html">Estetika</a></li>
                        </ul>
                    </li>
                    <li><a href="index.html">Koužky a kurzy</a></li>
                    <li><a href="index.html">Tábory 2024</a></li>
                    <li><a href="index.html">Aktuality a akce</a></li>
                    <li><a href="index.html">Odloučená pracoviště</a></li>
                    <li>
                        <Button title="Přihlásit se" path={buttonPath}/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header