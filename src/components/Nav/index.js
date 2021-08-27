import React from 'react';


function Nav(props) {
    
    const {
        setContactSelected,
        setResumeSelected,
        setBioSelected,
        setProjectsSelected
    } = props;


    return (
        <header className="flex-row">
            <h2>
                <span>Adrian Ulibarri</span>
            </h2>
            <nav>
                <ul className="flex-row fx-1">
                    <li className={`nav-li fx-1`}>
                        <span onClick={() => {
                            setContactSelected(true)
                            setProjectsSelected(false)
                            setBioSelected(false)
                            setResumeSelected(false)
                        }}>Contact</span>
                    </li>
                    <li className={`nav-li fx-1`}>
                        <span onClick={() => {
                            setProjectsSelected(true)
                            setContactSelected(false)
                            setResumeSelected(false)
                            setBioSelected(false)
                            }}>Projects</span>
                    </li>
                    <li className={`nav-li fx-1`}>
                        <span onClick={() => {
                            setResumeSelected(true)
                            setBioSelected(false)
                            setProjectsSelected(false)
                            setContactSelected(false)
                        }}>Resume</span>
                    </li>
                    <li className={`nav-li fx-1`}>
                        <span onClick={() => {
                            setBioSelected(true) 
                            setContactSelected(false)
                            setProjectsSelected(false)
                            setResumeSelected(false)
                            }}>Bio</span>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;