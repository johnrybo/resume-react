import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <div className="HeaderContainer">
                <h3>
                    <Link to="/" >Hem</Link>
                </h3>
                <h3>
                    <Link to="/cv" >CV</Link>
                </h3>
                <h3>
                    <a href="https://github.com/johnrybo">
                        <i class="fab fa-github"></i>
                    </a>
                </h3>
                <h3>
                    <a href="https://www.linkedin.com/in/johnrybo/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default Header;