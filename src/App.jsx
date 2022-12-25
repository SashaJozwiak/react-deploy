import {useState } from 'react';

import Sidebar from './components/sidebar/Sidebar.jsx';
import Dashboard from './components/main/profile/Dashboard.jsx';
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
      {activeCategory === 1 && <Dashboard/>}
      {activeCategory === 2 && <Settings/>}

    </main>



  </div>
);
}

export default App;
