import icons from './icons'

import styles from './sidebar.module.css'

export default function Sidebar ({activeId, setActiveId}) {

    const {
        dashboardIcon,
        settingsIcon,
        communicateIcon,
        docFaqIcon,
        designIcon,
        develompmentIcon,
        sEOHostingIcon,
        supportIcon,
        paymentIcon,
        discountIcon,
        bonusesIcon
      } = icons(styles.icons, styles.icons_active, activeId);

    const profile = [
        { id: 1, title: "Dashboard"}, 
        { id: 2, title: "Settings" },
        { id: 3, title: "Сommunicate" },
        { id: 4, title: "Doc/Faq" }
      ];
    
    const projects = [
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

    return (
        <nav className={styles.navbar}>
            <section className={styles.profile}>
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
                        : styles.links}>
                        {category.id === 1 ? dashboardIcon
                        :category.id === 2 ? settingsIcon
                        :category.id === 3 ? communicateIcon
                        :category.id === 4 ? docFaqIcon: null} {category.title}</li>)}
                </ul>
            </section>

            <section className={styles.profile}>
                <ul> <h2 style={activeId === 5 
                || activeId === 5 
                || activeId === 6 
                || activeId === 7 
                || activeId === 8 ? {color:'#48a3bd'}: null}
                    className = {styles.links_title}>
                    Projects</h2>
                    {projects.map((category) => 
                    <li key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={category.id === activeId
                        ? styles.links_active
                        : styles.links}>
                        {category.id === 5 ? designIcon
                        :category.id === 6 ? develompmentIcon
                        :category.id === 7 ? sEOHostingIcon
                        :category.id === 8 ? supportIcon: null} {category.title}</li>)}
                </ul>
            </section>

            <section className={styles.profile}>
                <ul> <h2 style={activeId === 10 
                || activeId === 9 
                || activeId === 10
                || activeId === 11 ? {color:'#48a3bd'}: null}
                    className = {styles.links_title}>Accounting</h2>
                    {accounting.map((category) => 
                    <li key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={category.id === activeId
                        ? styles.links_active
                        : styles.links}>
                        {category.id === 9 ? paymentIcon
                        :category.id === 10 ? discountIcon
                        :category.id === 11 ? bonusesIcon: null} {category.title}</li>)}
                </ul>
            </section>
        </nav>
    );
}
