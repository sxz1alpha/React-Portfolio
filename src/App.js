import React, { useState } from 'react';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Nav from './components/Nav';


function App() {
  
  const [tabs] = useState([
    {
      name: 'projects',
      description: 'Projects that ive worked on and developed.'
    },
    { 
      name: 'resume',
      description: 'My resume.'
    },
    {
      name: 'contact',
      description: 'A way to contact me.'
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  
  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      >
      </Nav>
      <main>
        <Bio></Bio>
        <Gallery currentTab={currentTab}></Gallery>
      </main>
    </div>
  );
}

export default App;
