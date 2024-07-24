import {useLocation} from "react-router-dom";
import "./TkJoyPage.css"

const TkJoyPage = () => {
    const location = useLocation();
    const {roles} = location.state || {};

    return (
        <div className="posts-container">
            <div className="post-box">
               <h1> TK JOY + {roles}</h1>
            </div>
        </div>
    )
}

export default TkJoyPage