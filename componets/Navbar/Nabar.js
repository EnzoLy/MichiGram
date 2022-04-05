import Link from 'next/link'
import {
  HomeIcon,
  InboxIcon,
  UploadIcon,
  ExploreIcon,
  NotificationsIcon
} from '../Icons/Icons'
import styles from './styles.module.css'
import Image from 'next/image'
import tobi from '../../public/tobi.jpg'
import { useAuthContext } from '../../hook/AuthContext'

export const Navbar = () => {
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>
      <nav className={styles.navbarContainer}>
        <div>
          <h3 className={styles.logo}>
            <Link href='/'>MichiGram</Link>
          </h3>
          <ul className={styles.navbar}>
            <li className={styles.navbarItem}>
              <div className={styles.searchContainer}>
                <input className={styles.searchInput} placeholder='Search' />
              </div>
            </li>
            <li className={styles.navbarItem}>
              <Link href='/' passHref className={styles.homeIcon}>
                <HomeIcon fill='#fff' />
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href='/' passHref>
                <InboxIcon />
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href='/test'>
                <a>
                  <UploadIcon />
                </a>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href='/' passHref>
                <ExploreIcon />
              </Link>
            </li>
            <li className={`${styles.navbarItem} ${styles.notificationIcon}`}>
              <Link href='/' passHref>
                <NotificationsIcon />
              </Link>
            </li>
            {
              user &&
              (
                <li className={`${styles.navbarItem} ${styles.profileIcon}`}>
                  <div className={styles.profileIconImage}>
                    <Link href={`/profile/${user.userId}`}>
                      <a>
                        <Image
                          src={tobi}
                          width={24}
                          height={24}
                          className={styles.iconprofile}
                          objectFit='cover'
                        />
                      </a>
                    </Link>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}
