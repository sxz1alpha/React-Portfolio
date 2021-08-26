import React from 'react';


function Nav(props) {
    
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
    } = props;

    console.log(tabs)
    return (
        <header>
            <h2>
                <span>Adrian Ulibarri</span>
            </h2>
            <nav>
                <ul>
                    <li>
                    <a href="/">Biography</a>
                    </li>
                    <li className={`nav-li`}>
                        <span>Contact</span>
                    </li>
                    {tabs.map((tab) => (
                        <li
                            className={`nav-tab ${
                                currentTab.name === tab.name && "nav-item"
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