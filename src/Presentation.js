import React from 'react';
import profilePic from './images/foto-480w.png'

function Presentation() {
    return (
        <div className="Presentation">
            <div className="Container">
                <img className="profilePic" src={profilePic} alt=''></img>
                <h1>John Rybo</h1>
                <h2>Frontend-utvecklare</h2>
            </div>
            <p>Scrolla vidare för att se mina projekt</p>
            <i class="fas fa-arrow-down"></i>
        </div>
    );
}

export default Presentation;