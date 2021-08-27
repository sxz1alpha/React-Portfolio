import React, { useEffect } from 'react';


function Nav(props) {
    
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
    } = props;

    useEffect(() => {
        document.title = currentTab.name
    }, [currentTab]);

    console.log(tabs)
    return (
        <header className="flex-row">
            <h2>
                <span>Adrian Ulibarri</span>
            </h2>
            <nav>
                <ul className="flex-row fx-1">
                    <li>
                    <a href="#bio">Biography</a>
                    </li>
                    <li className={`nav-li fx-1`}>
                        <span>Contact</span>
                    </li>
                    {tabs.map((tab) => (
                        <li
                            className={`fx-1 ${
                                currentTab.name === tab.name && "active"
                            }`}
                            key={tab.name}
                            >
                                <span 
                                     onClick={() => {setCurrentTab(tab)}}>
                                    {tab.name}
                                </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;