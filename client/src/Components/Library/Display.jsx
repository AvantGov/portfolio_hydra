// * depends
import { createBrowserRouter as CBR, RouterProvider as RP, ScrollRestoration } from 'react-router-dom'

// * comps 
import Home from '../_Pages/Home.jsx';
import Work from '../_Pages/Work.jsx';
import Personal from '../_Pages/Personal.jsx';
import Showcase from '../Showcase/Showcase.jsx';

// * data 
import { pf } from '../../assets/portfolio.js';

// * CSS 
import "../../CSS/Library/Display.css"


const Display = () => {

    const router = CBR([
        {
          path: "/",
          element: <Home />
        },
        {
            path: "/work",
            element: <Work />
        },
        {
            path: "/personal",
            element: <Personal />
        },
        {
            path: "/Development",
            element: <Showcase props={pf.Development} />
        },
        {
            path: "/Design",
            element: <Showcase props={pf.Design} />
        },        
        {
            path: "/Sound",
            element: <Showcase props={pf.Sound} />
        },
        {
            path: "/Photography",
            element: <Showcase props={pf.Photography} />
        }   
      ])

    return(
        <div className='Display' id='main_display'>
            <RP router={router}>
                <ScrollRestoration />
            </RP>
        </div>
    );
};

export default Display;