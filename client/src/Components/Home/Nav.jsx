// depends
import { Link } from 'react-router-dom';

// css 
import '../../CSS/Home/Nav.css';

const Nav = (props) => {
    const pr = props.props

    return(
        <div id='Nav' className='Nav' style={{
                backgroundColor: pr.color
            }}>
            <Link className='Nav__link' id='navlink_1' to='/'>Home</Link>
            <Link className='Nav__link' id='navlink_1' to='/Development'>Development</Link>
            <Link className='Nav__link' id='navlink_2' to='/Design'>Design</Link>
            <Link className='Nav__link' id='navlink_3' to='/Sound'>Sound</Link>
            <Link className='Nav__link' id='navlink_4' to='/Photography'>Photography</Link>
        </div>
    )
}

export default Nav;