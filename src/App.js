import React from 'react';
import Bio from './components/Bio';


function App() {
  
  const [categories] = useState([
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
      description: 'A brief look at Adrian.'
    }
  ])
  
  return (
    <div>
      <main>
        <Bio></Bio>
      </main>
    </div>
  );
}

export default App;
