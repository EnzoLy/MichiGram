import { getPostById } from '../../../firebase/client'

export default async (req, res) => {
  const { query } = req
  const { id } = query

  return await getPostById({ id }).then((post) => {
    if (post.exists()) {
      res.status(202).json(post.data())
    } else {
      res.status(404).json({ message: 'Post not found' })
    }
  })
}
