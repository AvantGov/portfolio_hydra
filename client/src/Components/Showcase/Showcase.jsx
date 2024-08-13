// depends 
import { useEffect, useRef } from 'react';
// utils 
import { ShowVideo } from '../../utils/ShowVideo';

// comps 
import FooterNav from '../Library/FooterNav';
import Case from './Case';


// css 
import '../../CSS/Showcase/Showcase.css';

const Showcase = (props) => {
    const pf = props.props
    var btnInit = useRef(false)

    useEffect(() => {
        const case_hydra = window.document.querySelector("#bulletContainer__Dev003")


        if(case_hydra && !btnInit.current) {
            const btn = window.document.createElement("button")
            btn.innerHTML = "Activate Visualizer"
            btn.id = "btn_actVis"
            btn.onclick = () => {ShowVideo()}
            case_hydra.appendChild(btn)
            btnInit.current = true
        }
    },[])

    return (
        <div className='Showcase' id='main_showcase'>
            <div className='Showcase__caseLable'>
                <h1 className='caseLable__title'>{pf.title}</h1>
                <p className='caseLable__desc'>{pf.desc}</p>
                {pf.title !== "Sound" ? <p className='caseLable__mobileWarn'>use desktop website or make window full screen to view samples</p> : null}
            </div>
            {pf.list.map((item) => {
                return(
                    <Case props={item} key={`showcase_${item.key}`}/>
                )
            })}
            <FooterNav props={{color: "#05C3DD" }}/>
        </div>
    )
};

export default Showcase;