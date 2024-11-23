// depends
import { useState } from 'react';

// css 
import '../../CSS/Showcase/Case.css'

const Case = (props) => {
    const item = props.props;
    var bulletcounter = 0;

    const [controller, setController] = useState({
        view: false,
    })

    const changeView = () => {
        var btn = window.document.getElementById(`viewctrl_${item.key}`)
        if (controller.view === false) {
            setController({view: true})
            btn.innerHTML = "Show Less"
        } else if (controller.view === true) {
            setController({view: false})
            btn.innerHTML = "Show More"
        }
        // console.log("update:", controller)
    }


    return (
        <div className='Showcase__case' key={`case_${item.key}`} id={`case_${item.key}`}>
            {/* <div className='case__coverContainer' style={{display: controller.view ? "none" : "block"}}>
                <img src={item.cover} className='coverContainer__cover' />
            </div> */}
            <div className='case__infoContainer' id={`infoCont_${item.key}`} style={{display: controller.view ? "none" : "flex"}}>
                <h2 className='case__title'>{item.title}</h2>
                <span className='title__year'>{item.year}</span>
                <p className='case__desc'>{item.desc}</p>
                <div className='case__bulletContainer' id={`bulletContainer__${item.key}`}>
                    {item.bullets.map((item) => {
                        bulletcounter += 1
                        return(
                            <p className='bulletContainer__bullet' key={`bc_${bulletcounter}`}><span>&#8277;</span>{item}</p>
                        )
                    })}  
                    {item.URL.location === "" ? null : <a className='bulletContainer__link' id={`bclink_${item.key}`} href={item.URL.location} target='_blank' rel='noopener noreferrer'>{item.URL.prompt}</a>}  
                </div> 
            </div>
            {
                item.samples.length > 0 ? 
                    <div className='Showcase__viewCtrl' id={`viewctrl_${item.key}`} onClick={() => {changeView()}}>
                        <p className='viewCtrl__copy'>Show More</p>
                    </div> : null
            }

            {
                item.samples.length > 0 ?
                    <div className='Showcase__sampleContainer' id={`showcase_${item.key}`} key={`samplecontain_${item.key}`}>
                        {item.samples.map((item) => {
                            return (
                                <div className='sampleContainer__pieceContainer' id={`${item}`} key={`${item}`}>
                                    <img className='imgCont__img' src={item} />
                                </div>
                            )
                        })}
                    </div> : null
            }
        </div>
    )
}

export default Case;