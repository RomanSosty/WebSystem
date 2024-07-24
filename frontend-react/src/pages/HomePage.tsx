import mainImg from "../assets/hlavni-pohled.jpg";
import bocniImg from "../assets/bocni-pohled.jpg";
import bocniImg2 from "../assets/bocni-pohled-2.jpg";
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className="main-img-container">
                <img src={mainImg} alt="Hlavní budova" className="main-image"/>
            </div>
            <div className="hero-text-container">
                <div className="hero-text">
                    <h1>DŮM DĚTÍ A MLÁDEŽE ORLOVÁ</h1>
                    <p>Dům dětí a mládeže Orlová je školské zařízení,
                        které zabezpečuje vyplnění volného času dětí, mládeže, jejich rodičů
                        a ostatních zájemců.</p>
                    <p>Zřizovatelem DDM Orlová je Město Orlová.
                        Činnost DDM v Orlové-Lutyni byla zahájena v roce 1990.
                        Celková rekonstrukce proběhla 2021-2022.</p>
                </div>
                <div className="hero-image-container">
                    <img src={bocniImg} alt="Boční pohled" className="hero-image"/>
                    <img src={bocniImg2} alt="Druhý boční pohled" className="hero-image-2"/>
                </div>
            </div>
        </div>
    )

}

export default HomePage;