
import { useState } from "react";


export default function SidebarAccount () {

    const values = [
        { id: 1, text: "Profile" },
        { id: 2, text: "Settings" },
        { id: 3, text: "Payment" },
        { id: 4, text: "Bonuses" },
        //{ id: 5, text: "Check" }
      ];

    const [activeId, setActiveId] = useState(1);

    return (

        <div className="App">
        <header className="App-header">

              <div className='job'>

                <h2>Account</h2>
              
                <ul style={{listStyle:'none'}}>
                  {values.map(item => <li key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={activeId === item.id ? 'App-link':'active'}
                  >{item.text}</li>)}
                </ul>
              </div>
              
            <div style={{width:'200px'}}>
              {activeId === 1? <div> <span>Это Проекты</span></div>
              :activeId === 2? <div> <span className='cat-text'>Это Дизайн</span></div>
              :activeId === 3? <div> <span className='cat-text'>Это Разработка</span></div>
              :activeId === 4? <div> Это SEO</div>
              :activeId === 5? <div> Это Поддержка</div>
              : null }
            </div>

        </header>

      </div>

    )
}