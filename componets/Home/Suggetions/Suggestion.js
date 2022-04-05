import styles from './styles.module.css'

export const Suggestions = () => {
  return (
    <div className={styles.suggestions}>
      <div className={styles.suggestionsHeader}>
        <h4 className={styles.suggestionsTitle}>Suggestions for you</h4>
        <p className={styles.viewAll}>View All</p>
      </div>
    </div>
  )
}
