import { useContext, useState } from 'react'
import { Navbar } from '../../componets/Navbar/Nabar'
import { AuthContext } from '../../contexts/AuthContext'
import { createPost } from '../../firebase/client'
import styles from './styles.module.css'
import imageCompression from 'browser-image-compression'
import { Modal } from '../../componets/modal/Modal'

const uploadStatusEnum = {
  UPLOADING: 'UPLOADING',
  UPLOADED: 'UPLOADED',
  ERROR: 'ERROR',
  NOTHING: 'NOTHING'
}

export default function Test () {
  const { user } = useContext(AuthContext)
  const [uploadStatus, setUploadStatus] = useState(uploadStatusEnum.NOTHING)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const image = event.target.image.files[0]

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    await imageCompression(image, options).then(result => {
      const post = {
        image: result,
        description: event.target.description.value,
        likes: 0
      }

      setUploadStatus(uploadStatusEnum.UPLOADING)
      createPost({ userId: user.userId, post }).then(() => setUploadStatus(uploadStatusEnum.UPLOADED))
    })

    // const post = {
    //   image: event.target.image.files[0],
    //   description: event.target.description.value,
    //   likes: 0
    // } 1608246 296118

    // setUploadStatus(uploadStatusEnum.UPLOADING)
    // createPost({ userId: user.userId, post }).then(() => setUploadStatus(uploadStatusEnum.UPLOADED))
  }

  return (
    <>
      <Navbar user={user} />
      <div className={styles.testContainer}>
        {uploadStatus === uploadStatusEnum.ERROR && (
          <div className={styles.error}>
            <p>Error uploading image.</p>
          </div>
        )}
        {uploadStatus === uploadStatusEnum.UPLOADING && (
          <div className={styles.uploading}>
            <span>Uploading...</span>
          </div>
        )}
        {uploadStatus === uploadStatusEnum.UPLOADED && (
          <div className={styles.uploaded}>
            <div className={styles.uploaded__text}>Uploaded!</div>
          </div>
        )}
        {uploadStatus === uploadStatusEnum.NOTHING && (
          <div>
            <h1>Test Post</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type='text' placeholder='description' name='description' />
              <input type='file' name='image' />
              <button type='submit'> Enviar </button>
            </form>
          </div>
        )}
      </div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <h1>Modal</h1>
        </div>
      </Modal>
    </>
  )
}
