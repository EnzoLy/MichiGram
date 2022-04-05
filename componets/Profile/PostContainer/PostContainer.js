import Image from 'next/image'
import styles from './styles.module.css'

export const PostContainer = ({ posts }) => {
  return (
    <div className={styles.postContainer}>
      {posts.map((post, index) => {
        return (
          <div key={index} className={styles.post}>
            <Image
              className={styles.postImage}
              src={post.imageUrl}
              width='293'
              height='293'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='https://via.placeholder.com/293'
              onLoadingComplete={() => {
                console.log('complete')
              }}
              unoptimized
            />
          </div>
        )
      })}
    </div>
  )
}
