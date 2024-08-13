// css 
import "../../CSS/_Pages/Personal.css";

// * comp
import PersonalHistory from "../Experience/PersonalHistory";

const Personal = () => {

    return(
        <div className="Personal">
            <div className="Personal__intro">
                <h1 className="intro__title">Personal Projects</h1>
                <p className="intro__copy">Summary information about personal projects, pro-bono reporting, and open source contributions.</p>
            </div>
            <PersonalHistory />
        </div>
    )
};

export default Personal;