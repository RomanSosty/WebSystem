import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"
import Button from "../components/Button.tsx";

const TkJoyPage = () => {
    const location = useLocation();
    const {roles} = location.state || {};

    return (<div>
            <div className="page-main-text-section">
                <div>
                    <h1>Taneční klub Joy</h1>
                    <p>Vedoucí oddělení Kateřina Šostoková</p>
                    <p>603 154 426, sostokova@ddm-orlova.cz</p>
                </div>
                <div>
                    <h2>O nás</h2>
                    <p>
                        Taneční klub Joy byl založen v září roku 2015. Zakladatelkou a hlavní vedoucí klubu je Kateřina
                        Šostoková.</p>
                    <p>
                        Věnujeme se tanečnímu stylu disco dance a show dance, tanečníky rozdělujeme do skupin dle
                        výkonnostní třídy a věku.
                        V současné době působí v našem klubu téměř 200 dětí ve věku od 3 - 25 let.
                        Taneční klub Joy má za svá léta působení na kontě mnoho tanečních úspěchů,
                        největší úspěch je pro nás ovšem spokojenost a radost z tance dítěte.
                    </p>
                </div>
            </div>
            <div className="posts-section">
                <div className="posts-header">
                    <h1>Aktuality</h1>
                    {roles == "ROLE_JOY" ? (
                        <Button title="Přidat příspěvek" path="/tkjoy"></Button>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="posts-container">
                    <div className="post-box">
                        <h3> ROZVRH TRÉNINKŮ V TÝDNU 3.-9.6.2024</h3>
                        <p>
                            BABY KATEGORIE: Pondělí a středa beze změny<br/>
                            DISCO C: Pondělí a středa beze změny <br/>
                            DISCO B: Úterý a čtvrtek beze změny<br/>
                            SOUTĚŽNÍ SKUPINA MINI: Pouze středa 15:30-17:00 hod.<br/>
                            SOUTĚŽNÍ SKUPINA DĚTI: Pouze čtvrtek 15:00-16:30<br/>
                            SOUTĚŽNÍ SKUPINA JUNIOŘI: Pouze čtvrtek 16:30-18:00 hod.<br/>
                            HLAVNÍ KATEGORIE: Pouze čtvrtek 16:30-18:00 hod.<br/>
                        </p>
                    </div>
                    <div className="post-box">
                        <h3> PO SOUTĚŽI ORLOVSKÝ POHÁREK JIŽ NEBUDOU PROBÍHAT ŽÁDNÉ TRÉNINKY.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TkJoyPage