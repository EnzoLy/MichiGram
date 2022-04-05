import Image from 'next/image'
import picProfile from '../../../public/michi.jpeg'
import styles from './styles.module.css'

export const PerfilInfo = () => {
  return (
    <div className={styles.perfil}>
      <div className={styles.perfilContainer}>
        <div className={styles.perfilHeader}>
          <div>
            <Image
              src={picProfile}
              className={styles.iconPerfil}
              width={56}
              height={56}
            />
          </div>
          <div className={styles.perfilInfo}>
            <p className={styles.username}>michi</p>
            <p className={styles.name}>michi asd</p>
          </div>
        </div>
        <div className={styles.switchAccount}>
          <a>Swtich Account</a>
        </div>
      </div>
    </div>
  )
}
