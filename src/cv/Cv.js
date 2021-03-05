import React from 'react'
import '../css/Cv.css';

import Education from './Education';
import Work from './Work';
import About from './About'

export default function Cv() {
    return (
        <div className="Cv">
            <Education />
            <Work />
            <About />
        </div>
    );
}