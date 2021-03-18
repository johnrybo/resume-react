import React from 'react'

import Education from './Education';
import Work from './Work';
import About from './About'

export default function Cv() {

    const ready = true;

    if (ready){
        return (
            <div className="Cv">
                <Education />
                <Work />
                <About />
            </div>
        );
    } else {
        return(
            <div className="Brb">Sidan är under konstruktion</div>
        )
    }
    
}