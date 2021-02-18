import React from 'react';

function Project(props) {
    return (
        <div className="Project">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
      );
}

export default Project;