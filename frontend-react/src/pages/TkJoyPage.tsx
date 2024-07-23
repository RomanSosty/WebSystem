import {useLocation} from "react-router-dom";

const TkJoyPage = () => {
    const location = useLocation();
    const {roles} = location.state || {};

    return (
        <div>
            TK JOY + {roles}
        </div>
    )
}

export default TkJoyPage