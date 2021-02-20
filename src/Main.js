import React from 'react';
import Project from './Project'

import djupvik from './images/djupvik-480w.png'
import gokart from './images/gokart-480w.png'
import lab1 from './images/lab-1-480w.png'
import rainbowman from './images/rainbowman-480w.png'
import calendar from './images/calendar-480w.png'

function Main() {
    return (
        <div className="Main">
            <Project title="Djupviks hamn" img={djupvik} alt="Djupviks hamn" description="Spel" />
            <Project title="Gokart" img={gokart} alt="Gokart" description="Hemsida"/>
            <Project title="JS-Lab-1" img={lab1} alt="Lab 1" description="Spel" />
            <Project title="Rainbow Man" img={rainbowman} alt="Rainbow Man" description="Spel" />
            <Project title="Calendar" img={calendar} alt="Calendar" description="Kalender" />
        </div>
      );
}

export default Main;