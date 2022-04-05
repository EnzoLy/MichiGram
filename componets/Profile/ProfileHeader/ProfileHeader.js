import styles from './styles.module.css'
import picProfile from '../../../public/tobi.jpg'
import Image from 'next/image'
import { SettingsIcon } from '../../Icons/Icons'

export const ProfileHeader = () => {
  return (
    <div className={styles.profileHeaderContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageContainer}>
          <Image
            src={picProfile}
            width={150}
            height={150}
            className={styles.profileImage}
            objectFit='cover'
          />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileSettings}>
            <h2 className={styles.username}>michi_123</h2>
            <button className={styles.buttonEdit}>Edit Profile</button>
            <span className={styles.buttonSettings}><SettingsIcon /></span>
          </div>

          <div className={styles.profileStats}>
            <span>0 Publications</span>
            <span>0 Followers</span>
            <span>0 Following</span>
          </div>

          <div className={styles.name}>
            <span>Michi asd</span>
          </div>

          <div className={styles.description}>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              ipsa qui
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
