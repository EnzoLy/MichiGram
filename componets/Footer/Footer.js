import Link from 'next/link'
import { HomeIcon, UploadIcon, ExploreIcon } from '../Icons/Icons'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footerContainer}>
        <div>
          <ul className={styles.footer}>
            <li className={styles.footerItem}>
              <Link href='/' passHref className={styles.homeIcon}>
                <HomeIcon fill='#fff' />
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link href='/' passHref>
                <UploadIcon />
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link href='/' passHref>
                <ExploreIcon />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
