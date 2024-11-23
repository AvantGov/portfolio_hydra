// depends 
import React from 'react';

// data
import { samples } from '../../assets/samples';


//css 
import "../../CSS/Home/SampleContainer.css"


const SampleContainer = () => {

    return(
        <div className='SampleContainer' id="SampleContainer">
            {samples.map((item) => {
                return(
                    <div className='SampleContainer__sampleItem' key={item.key}>
                        <img src={item.cover} className='sampleItem__img' />
                        <h2 className='sampleItem__header'>{item.title}</h2>
                        <p className='sampleItem__desc'>{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default SampleContainer;