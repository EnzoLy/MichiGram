import Image from 'next/image'
import picProfile from '../../../public/michiAvatar.jpeg'
import style from './styles.module.css'

export const HistoriesFeed = () => {
  return (
    <div className={style.historiesContainer}>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
      <div className={style.historyContainer}>
        <div className={style.history}>
          <Image
            src={picProfile}
            alt='history-image'
            className={style.historyImage}
            width={56}
            height={56}
            objectFit='cover'
          />
          <span className={style.username}>michi</span>
        </div>
      </div>
    </div>
  )
}
