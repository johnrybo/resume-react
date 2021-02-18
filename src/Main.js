import React from 'react';
import Intro from './Intro';
import Project from './Project'

function Main() {
    return (
        <div className="Main">
            <Intro />
            <Project title="Rainbow Man" description="Spel" />
            <Project title="Gokart" description="Hemsida"/>
            <Project title="JS-Lab-1" description="Spel" />
        </div>
      );
}

export default Main;