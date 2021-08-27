import React, { useState } from 'react';


const WorkList = ({ tab }) => {

    const [projects] = useState([
        {
            name: 'Mygarden',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },    
        {
            name: 'Overage',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Password generator',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Runbuddy',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },   
        {
            name: 'Taskmaster Pro',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Weather dashboard',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentProject = projects.filter((project) => project.category)

    return (
        <div>
            <div className="flex-row">
                {currentProject.map((photo, i) => (
                <img 
                src={require(`../../assets/projects/${i}.png`).default} 
                alt={photo.description} 
                className="project-image fx-1" 
                key={photo.name}></img>
                ))}
            </div>
        </div>
    ) 
}

export default WorkList;