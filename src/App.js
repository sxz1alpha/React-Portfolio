import React, { useState } from 'react';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [bioSelected, setBioSelected] = useState(true);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

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
    {
      name: 'bio',
      description: 'A way to contact me.'
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
        setBioSelected={setBioSelected}
        setProjectsSelected={setProjectsSelected}
      >
      </Nav>
      <main>
      {!contactSelected ? ( 
        <>
       </>
        ):(  
      <Contact></Contact>
      )}
      {!bioSelected ? (
        <>
        </>
      ) : (
        <Bio></Bio>
      )}        
      {!projectsSelected ? (
        <>
        </>
      ) : (
        <Gallery currentTab={currentTab}></Gallery>
      )}
      {!resumeSelected ? (
        <>
        </>
      ) : (
        <Resume></Resume>
        )}        

        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
