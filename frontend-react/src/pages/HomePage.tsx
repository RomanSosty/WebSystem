import mainImg from "../assets/hlavni-pohled.jpg";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="container">
            <img src={mainImg} alt="Hlavní budova" className="main-image"/>
        </div>
    )

}

export default HomePage;