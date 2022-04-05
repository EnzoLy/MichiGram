import styles from './styles.module.css'

export const Modal = ({ children, showModal, setShowModal }) => {
  const handleClose = (event) => {
    if (event.target.id === 'modal') {
      setShowModal(false)
    }
  }

  return (
    <>
      {
        showModal && (
          <div className={styles.overlay} onClick={(event) => handleClose(event)} id='modal'>
            <div className={styles.modalContainer}>
              {children}
            </div>
          </div>
        )
      }
    </>
  )
}
