import { Feed } from '../componets/Home/Feed/Feed'
import { HistoriesFeed } from '../componets/Home/HistoriesFeed/HistoriesFeed'
import { Navbar } from '../componets/Navbar/Nabar'
import styles from '../styles/Home.module.css'
import { Footer } from '../componets/Footer/Footer'
import { loginWithGithub, logout } from '../firebase/client'
import { useAuthContext } from '../hook/AuthContext'

export default function Home () {
  const { user } = useAuthContext()

  const handleClick = () => {
    loginWithGithub().catch((error) => {
      console.error(error)
    })
  }

  const handleLogout = () => logout()

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          {user === null && (
            <button onClick={handleClick}> Login GitHub </button>
          )}
          {user && user.displayName && (
            <button onClick={handleLogout}> Logout </button>
          )}
          <HistoriesFeed />
          <Feed />
        </div>
      </div>
      <Footer />
    </>
  )
}
