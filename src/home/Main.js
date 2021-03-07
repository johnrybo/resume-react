import React from 'react';
import Project from './Project'

import weatherWidget from '../images/weatherwidget-480w.png'
import gokart from '../images/gokart-480w.png'
import lab1 from '../images/lab-1-480w.png'
import rainbowman from '../images/rainbowman-480w.png'
import calendar from '../images/calendar-480w.png'

function Main() {

    return (
        <div className="Main">
            <Project title="Weather Widget" img={weatherWidget} alt="Weather Widget" description="Hemsida" gitHubUrl="https://github.com/johnrybo/miniprojekt-react-1" demoUrl="https://jmlweather.netlify.app/"/>
            <Project title="Rainbow Man" img={rainbowman} alt="Rainbow Man" description="Spel" gitHubUrl="https://github.com/johnrybo/Rainbow-Man" demoUrl="https://rainbowman.netlify.app/"/>
            <Project title="Calendar" img={calendar} alt="Calendar" description="Kalender" gitHubUrl="https://github.com/johnrybo/Kalender" demoUrl="https://johnrybo.github.io/Kalender/"/>
            <Project title="Text Adventure" img={lab1} alt="Lab 1" description="Spel" gitHubUrl="https://github.com/johnrybo/Textbaserad-interaktiv-upplevelse" demoUrl="https://johnrybo.github.io/Textbaserad-interaktiv-upplevelse"/>
            <Project title="Gokart" img={gokart} alt="Gokart" description="Hemsida" gitHubUrl="https://github.com/johnrybo/gokart" demoUrl="https://johnrybo.github.io/gokart/"/>
        </div>
    );
}

export default Main;