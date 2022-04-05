import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  Timestamp,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  getDoc,
  doc
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

initializeApp(firebaseConfig)

const database = getFirestore()
const storage = getStorage()

const auth = getAuth()

export const loginWithGithub = async () => {
  const githubProvider = new GithubAuthProvider()

  const result = await signInWithPopup(auth, githubProvider)
  return mapUserFromFirebase(result.user)
}

export const existsUser = (userId) => {
  return query(database, collection('users')).where('id', '==', userId).get() !== null
}

export const logout = () => auth.signOut()

export const onStateChanged = (callback) => {
  return onAuthStateChanged(auth, (user) =>
    callback(user ? mapUserFromFirebase(user) : null)
  )
}

export const createPost = ({ userId, post }) => {
  const { image, description, likes } = post
  return uploadImage(image).then((snapshot) => {
    return getImgUrl(snapshot.ref).then((imageUrl) => {
      const dateNow = Timestamp.fromDate(new Date())

      addDoc(collection(database, 'posts'), {
        userId,
        imageUrl,
        description,
        likes,
        createdAt: dateNow
      })
    })
  })
}

const uploadImage = (file) => {
  const storageRef = ref(storage, 'images/' + file.name)
  return uploadBytes(storageRef, file)
}

export const getImgUrl = async (ref) => {
  const imageFetch = await getDownloadURL(ref).then((url) => url)
  return imageFetch
}

export const getAllPostsFromUser = async ({ userId }) => {
  const q = query(collection(database, 'posts'), where('userId', '==', userId))

  const postsFecth = (await getDocs(q)).docs.map((doc) =>
    mapPostFromFirebase(doc)
  )

  return postsFecth
}

export const getAllLastestPosts = async ({ limitOfPosts }) => {
  const q = query(
    collection(database, 'posts'),
    where('createdAt', '<=', Timestamp.fromDate(new Date())),
    orderBy('createdAt', 'desc'),
    limit(limitOfPosts)
  )

  const postsFecth = (await getDocs(q)).docs.map((doc) =>
    mapPostFromFirebase(doc)
  )

  return postsFecth
}

export const getPostById = async ({ id }) => {
  const docRef = doc(database, 'posts', id)
  const docSnap = await getDoc(docRef)

  return docSnap
}

const mapPostFromFirebase = (doc) => {
  const { imageUrl, description, likes, createdAt } = doc.data()

  return {
    id: doc.id,
    imageUrl,
    description,
    likes,
    createdAt
  }
}

const mapUserFromFirebase = (user) => {
  const { displayName, photoURL, email, uid } = user

  return {
    displayName,
    avatarURL: photoURL,
    email,
    userId: uid
  }
}
