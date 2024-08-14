// depends 
import { Link } from "react-router-dom";

// css 
import "../../CSS/Library/404.css"


const FourOhFour = () => {
    return (
        <div className="FourOhFour">
            <div className="FourOhFour__container">
                <img className="container__404icon" src="/404-icon.svg" />
            </div>
            <div className="FourOhFour__404content">
                <h3 className="FourOhFourcontent__title">There's nothing here!</h3>
                <p className="FourOhFourcontent__copy">Use the button below to return to the home page</p>
                <Link to="/" className="fourohfourcontent__link">Return to Home</Link>
            </div>
        </div>
    )
};


export default FourOhFour;