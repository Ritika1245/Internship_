import Navbar from "../Components/dashboard/navbar/navbar"
import Sidebar from "../Components/dashboard/sidebar/sidebar"
import styles from "../Components/dashboard/dashboard.module.css"
import Footer from "../Components/dashboard/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout