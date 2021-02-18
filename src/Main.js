import React from 'react';
import Project from './Project'

import djupvik from './images/djupvik-480w.png'
import gokart from './images/gokart-480w.png'
import lab1 from './images/lab-1-480w.png'

function Main() {
    return (
        <div className="Main">
            <Project title="Djupviks hamn" img={djupvik} alt="Djupviks hamn" description="Spel" />
            <Project title="Gokart" img={gokart} alt="Gokart" description="Hemsida"/>
            <Project title="JS-Lab-1" img={lab1} alt="Lab 1" description="Spel" />
        </div>
      );
}

export default Main;