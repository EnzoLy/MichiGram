import Image from 'next/image'
import styles from './styles.module.css'
import AvatatarImg from '../../../../public/michiAvatar.jpeg'
import {
  NotificationsIcon,
  MessageIcon,
  SharedIcon,
  SaveIcon
} from '../../../Icons/Icons'

export const Post = ({ image }) => {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <Image
          src={AvatatarImg}
          width={32}
          height={32}
          className={styles.userAvatar}
          objectFit='cover'
          priority
        />
        <div className={styles.userNameHeader}>
          <span>
            <a>Michi</a>
          </span>
        </div>
      </header>
      <div>
        <Image
          src={image}
          width='90vw'
          height='100%'
          layout='responsive'
          objectFit='cover'
          className={styles.imageContainer}
          priority
        />
      </div>
      <div className={styles.postIcons}>
        <div className={styles.firstIcons}>
          <span className={styles.icon}>
            <NotificationsIcon />
          </span>
          <span className={styles.icon}>
            <MessageIcon />
          </span>
          <span className={styles.icon}>
            <SharedIcon />
          </span>
        </div>
        <div className={styles.lastIcon}>
          <span>
            <SaveIcon />
          </span>
        </div>
      </div>
      <div className={styles.likes}>
        <span>100 Likes</span>
      </div>
      <div className={styles.descriptionContainer}>
        <span className={styles.description}>
          <span className={styles.userName}>Michi  </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima in,
          voluptatem repellendus ipsam sint, dolor sapiente hic deleniti
          aspernatur perferendis similique quia, fugit natus quisquam sunt.
          Porro quis quasi excepturi?
        </span>
      </div>
      <div className={styles.commentsAmount}>
        <span>View 10 comments</span>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <span className={styles.description}>
            <span className={styles.userName}>Michi  </span>
            ASDASDASD
          </span>
        </div>
      </div>
      <div className={styles.postAgo}>
        <span>10 Hours</span>
      </div>
      <div className={styles.addComment}>
        <input type='text' placeholder='Add a comment' />
        <button type='submit' className={styles.buttonComment}>
          Public
        </button>
      </div>
    </article>
  )
}
