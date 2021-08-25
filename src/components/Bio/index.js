import React from 'react';
import bioImage from "../../assets/bio/Terran-Pool.png"
function Bio() {
    return(
        <section>
            <h1 id="bio">Biography</h1>
            <img src={bioImage} className="bio-1" alt="bio" style={{ width: "80%"}}/>
        </section>
    );
}

export default Bio;