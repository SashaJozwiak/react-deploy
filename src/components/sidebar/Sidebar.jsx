
import styles from './sidebar.module.css'
//import svg from '../../img/icons/nav/dasboard.svg'

//import './sidebar.css'

export default function Sidebar ({activeId, setActiveId}) {

    const profile = [
        { id: 1, title: "Dashboard"}, 
        { id: 2, title: "Settings" },
        { id: 3, title: "Сommunicate" },
        { id: 4, title: "Doc/Faq" }
      ];
    
    const projects = [
        /* { id: 5, title: "Dashboard" }, */
        { id: 5, title: "Design" },
        { id: 6, title: "Develompment" },
        { id: 7, title: "SEO & Hosting" },
        { id: 8, title: "Support" }
      ];

    const accounting = [
        { id: 9, title: "Payment" },
        { id: 10, title: "Discount" },
        { id: 11, title: "Bonuses" }
      ];

    

    console.log(activeId);

    return (
        <nav className={styles.navbar}>
            <section className={styles.navbar_section}>
                <ul className={styles.page_lists}> <h2 style={activeId === 1 
                || activeId === 2 
                || activeId === 3 
                || activeId === 4 ? {color:'#48a3bd'}: null}
                className = {styles.links_title}>
                    
                    Profile</h2>
                    {profile.map((category) => 
                    <li key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={category.id === activeId
                        ? styles.links_active
                        : styles.links}
                    >
                        
                        {category.title}</li>)}
                </ul>
            </section>

            <section className={styles.profile}>
                <ul> <h2 style={activeId === 5 
                || activeId === 6 
                || activeId === 7 
                || activeId === 8 
                || activeId === 9 ? {color:'#48a3bd'}: null}
                    className = {styles.links_title}>Projects</h2>
                    {projects.map((category) => 
                    <li key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={category.id === activeId
                        ? styles.links_active
                        : styles.links}
                    >{category.title}</li>)}
                </ul>
            </section>

            <section className={styles.profile}>
                <ul> <h2 style={activeId === 10 
                || activeId === 11 
                || activeId === 12 ? {color:'#48a3bd'}: null}
                    className = {styles.links_title}>Accounting</h2>
                    {accounting.map((category) => 
                    <li key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={category.id === activeId
                        ? styles.links_active
                        : styles.links}
                    >{category.title}</li>)}
                </ul>
            </section>

        




        </nav>

    );




}