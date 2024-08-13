// * CSS
import "../../CSS/_Pages/Work.css";

// * comps
import WorkHistory from "../Experience/WorkHistory";

const Work = () => {

    return(
        <div className="Work">
            <div className="Work__intro">
                <h1 className="intro__title" id="title_work">Work History</h1>
                <p className="intro__copy">Summary information about current and previous professional positions. PDF resume can be provided upon request.</p>
            </div>
            <div className="Work__history">
                <WorkHistory />
            </div>
        </div>
    )
};

export default Work;