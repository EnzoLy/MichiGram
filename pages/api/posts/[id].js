import { getAllPostsFromUser } from '../../../firebase/client'

export default async (req, res) => {
  const { query } = req
  const { id } = query

  return await getAllPostsFromUser({ userId: id }).then((posts) => {
    if (posts) {
      res.status(202).json(posts)
    } else {
      res.status(404).json({ message: 'Post not found' })
    }
  })
}
