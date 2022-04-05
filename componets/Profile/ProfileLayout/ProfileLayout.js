import styles from './styles.module.css'

export const ProfileLayout = ({ children }) => {
  return <div className={styles.profileContainer}>{children}</div>
}
