import React from 'react';
import profilePic from '../images/foto-480w.png'

function Presentation() {
    return (
        <div className="Presentation">
            <div className="Container">
            <img className="profilePic" src={profilePic} alt=''></img>
                <div className="Container2">
                    <h1>John Rybo</h1>
                    <h2>FRONTEND-UTVECKLARE</h2>
                </div>
            </div>
            <p>Scrolla vidare för att se mina projekt</p>
            <i class="fas fa-arrow-down"></i>
        </div>
    );
}

export default Presentation;