// * depends
import React from 'react';

// * COMPS
import Nav from '../Home/Nav.jsx';
import Heading from '../Home/Heading.jsx';
import PortfolioCard from '../Library/PortfolioCard.jsx';
import SampleContainer from '../Home/SampleContainer.jsx';
import ExperienceJump from '../Home/ExperienceJump.jsx';
import Footer from '../Footer.jsx';
import Branding from '../Home/Branding.jsx';

// * data 
import {pf} from '../../assets/portfolio.js'


// * css 
import '../../CSS/_Pages/Home.css'

const Home = () => {

    
    return(
        <div className="Home" id='main_home'>
            {/* <Nav props={{color: "#e16a8b"}}/> */}
            <Heading />
            <PortfolioCard props={pf.Development} />
            <PortfolioCard props={pf.Design} />
            <PortfolioCard props={pf.Sound} />
            <PortfolioCard props={pf.Photography} />
            {/* <SampleContainer /> */}
            <ExperienceJump />
            <Footer />
            <Branding />
        </div>
    )
};

export default Home;