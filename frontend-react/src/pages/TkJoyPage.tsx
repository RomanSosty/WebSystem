import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"
import Post from "../components/Post.tsx";
import PostHeader from "../components/PostHeader.tsx";

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
               <PostHeader title="Aktuality" roles={roles}/>
                <div className="posts-container">
                    <Post title="ROZVRH TRÉNINKŮ V TÝDNU 3.-9.6.2024"
                          content=" BABY KATEGORIE: Pondělí a středa beze změny
                                    DISCO C: Pondělí a středa beze změny
                                    DISCO B: Úterý a čtvrtek beze změny
                                    SOUTĚŽNÍ SKUPINA MINI: Pouze středa 15:30-17:00 hod.
                                    SOUTĚŽNÍ SKUPINA DĚTI: Pouze čtvrtek 15:00-16:30
                                    SOUTĚŽNÍ SKUPINA JUNIOŘI: Pouze čtvrtek 16:30-18:00 hod.
                                    HLAVNÍ KATEGORIE: Pouze čtvrtek 16:30-18:00 hod."
                          createdAt="21.9.2024" />
                    <Post title="PO SOUTĚŽI ORLOVSKÝ POHÁREK JIŽ NEBUDOU PROBÍHAT ŽÁDNÉ TRÉNINKY" createdAt="20.10.2024"/>
                </div>
            </div>
        </div>
    )
}

export default TkJoyPage