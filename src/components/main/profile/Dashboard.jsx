
import mainstyles from './profile_styles/Settings.module.css'
import styles from './profile_styles/Dashboard.module.css'


function Dashboard () {
    return (
        <div className={mainstyles.myinfo}>
            <h2 className={mainstyles.links_title}>All projects</h2>

            <div className={styles.projects_container}>
                <div className={styles.projects}>

                </div>
            </div >

            <div className={mainstyles.myinfo}>
            <h2 className={mainstyles.links_title}>Stats</h2>
            <div className={styles.projects_container}>
                <div className={styles.projects_stats}>

                </div>
            </div >

            </div>
        </div>
    )
}

export default Dashboard;