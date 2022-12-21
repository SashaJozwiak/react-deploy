import { Fragment, useState } from 'react';

import Sidebar from './components/sidebar/Sidebar.jsx';
import Settings from './components/main/profile/Settings'

import './App.css';

 function App () {

  const [activeCategory, setActiveCategory] = useState(1);


  return (
  < div className = 'App'>
    <Sidebar className="sidebar" 
    activeId={activeCategory} 
    setActiveId = {setActiveCategory}/>

    <main className='main'>
      {activeCategory === 2? <Settings/> : null}

    </main>



  </div>
);
}

export default App;
