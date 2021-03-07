import React from 'react'

function Project(props) {
    return (
        <div className="Project">
        <h2>{props.title}</h2>
            <img className="projectImage" src={props.img} alt={props.alt}></img>
            <div className="Links">
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `${props.gitHubUrl}`;
                }} className="GitHubButton">Github</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `${props.demoUrl}`;
                }} className="DemoButton">Demo</button>
            </div>
            {/* <p>{props.description}</p> */}
        </div>
    );
}

export default Project;