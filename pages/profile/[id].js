import { Navbar } from '../../componets/Navbar/Nabar'
import { ProfileHeader } from '../../componets/Profile/ProfileHeader/ProfileHeader'
import { ProfileLayout } from '../../componets/Profile/ProfileLayout/ProfileLayout'
import styles from './styles.module.css'
import { useAuthContext } from '../../hook/AuthContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { PostContainer } from '../../componets/Profile/PostContainer/PostContainer'
import { Footer } from '../../componets/Footer/Footer'

export default function Profile ({ posts }) {
  const { user } = useAuthContext()

  return (
    <>
      <Navbar />
      {
        !user && <Skeleton count={5} />
      }
      {
        user && (
          <ProfileLayout>
            <div className={styles.profileContainer}>
              <ProfileHeader />
              <div className={styles.divisionContainer}>
                <ul className={styles.divisionMenu}>
                  <li className={styles.divisionItem}>
                    <a href='#'> Posts </a>
                  </li>
                </ul>
              </div>
              <PostContainer posts={posts} />
            </div>
          </ProfileLayout>
        )
      }
      <Footer />
    </>
  )
}

export async function getServerSideProps (context, req) {
  const { id } = context.query

  let baseUrl = 'http://localhost:3000'

  if (process.env.VERCEL_URL) {
    baseUrl = process.env.VERCEL_URL
  }

  const fecthPosts = await fetch(baseUrl + '/api/posts/' + id)
    .then((res) => res.json())

  return {
    props: {
      posts: fecthPosts
    }
  }
}
