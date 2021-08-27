import React from 'react';
import Work from '../Work';

function Gallery({ currentTab }) {
    const { name, description } = currentTab
    
    return (
        <section>
            <h1>{name}</h1>
            <p>{description}</p>
            <Work tab={currentTab.name}/>
        </section>
    )
}

export default Gallery;