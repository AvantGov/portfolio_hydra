// depends
import { Link } from "react-router-dom";

// utils 
import { toHistoryTop, toShowcaseTop, toHomeTop } from "../../utils/scrollUtils";

// css 
import "../../CSS/Library/FooterNav.css";

const FooterNav = (props) => {
    const pr = props.props

    return(
        <div id='FooterNav' className='FooterNav'>
            <Link className='FooterNav__link' id='footer_navlink_1' onClick={toHomeTop} to='/'>Home</Link>
            <Link className='FooterNav__link' id='footer_navlink_5' onClick={toShowcaseTop} to='/Development'>Development</Link>
            <Link className='FooterNav__link' id='footer_navlink_2' onClick={toShowcaseTop} to='/Design'>Design</Link>
            <Link className='FooterNav__link' id='footer_navlink_3' onClick={toShowcaseTop} to='/Sound'>Sound</Link>
            <Link className='FooterNav__link' id='footer_navlink_4' onClick={toShowcaseTop} to='/Photography'>Photography</Link>
            <Link className='FooterNav__link' id='footer_navlink_6' onClick={toHistoryTop} to='/work'>Work History</Link>
            <Link className='FooterNav__link' id='footer_navlink_7' onClick={toHistoryTop} to='/personal'>Personal PRJs</Link>
        </div>
    )
}

export default FooterNav;

