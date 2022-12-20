import { Fragment, useState } from 'react';

import Sidebar from './components/sidebar/Sidebar.jsx';
import Myinfo from '../src/components/main/profile/Myinfo'

import './App.css';

 function App () {

  const [activeCategory, setActiveCategory] = useState(1);


  return (
  < div className = 'App'>
    <Sidebar className="sidebar" 
    activeId={activeCategory} 
    setActiveId = {setActiveCategory}/>

    <main className='main'>
      {activeCategory === 1? <Myinfo/> : null}

    </main>



  </div>
);
}

export default App;
