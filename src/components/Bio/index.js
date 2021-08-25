import React from 'react';
import bioImage from "../../assets/bio/Terran-Pool.png"

function Bio() {
    return(
        <section>
            <h1 id="bio">Biography</h1>
            <img src={bioImage} className="bio-1" alt="bio" style={{ width: "80%"}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio aliquid error, 
                illo quos veritatis temporibus vero incidunt,
                 blanditiis fuga iure optio cumque maxime, quae eius voluptates sit? Tenetur, atque.</p>
        </section>
    );
}

export default Bio;