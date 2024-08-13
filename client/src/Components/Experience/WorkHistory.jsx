// comps 
import FooterNav from "../Library/FooterNav.jsx";

// css 
import "../../CSS/Experience/WorkHistory.css";

// data 
import {workhistory} from '../../assets/experience.js';


const WorkHistory = () => {
    return(
        <div className="WorkHistory">
            {workhistory.map((item) => {
                return (
                    <div key={item.id} className="WorkHistory__posContainer">
                        <h2 className="posContainer__title">{item.title}</h2>
                        <p className="posContainer__company">{item.company}</p>
                        <p className="posContainer__dates">{item.dates} | {item.location}</p>
                        {item.bullets.map((item) => {
                            return(
                                <p className="posContainer__bullet" key={Math.random()}>{item}</p>
                            )
                        })}
                    </div>
                )
            })}
            <FooterNav props={{color: "#f2d471"}} />
        </div>
    )
}

export default WorkHistory;