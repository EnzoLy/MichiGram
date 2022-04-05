import { Post } from './Post/Post'
import styles from './styles.module.css'
import imageTest from '../../../public/tom.jpg'
import shifuTest from '../../../public/shifu.jpg'
import tobi from '../../../public/tobi.jpg'
import richi from '../../../public/richi.jpg'

export const Feed = () => {
  return (
    <div className={styles.feed}>
      <div>
        <Post image={imageTest} />
        <Post image={shifuTest} />
        <Post image={tobi} />
        <Post image={richi} />
      </div>
    </div>
  )
}
