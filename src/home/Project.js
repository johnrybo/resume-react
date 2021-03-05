import React from 'react'

function Project(props) {
    return (
        <div className="Project">
            <img className="projectImage" src={props.img} alt={props.alt}></img>
            <h2>{props.title}</h2>
            {/* <p>{props.description}</p> */}
        </div>
      );
}

export default Project;