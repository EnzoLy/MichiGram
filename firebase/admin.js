const admin = require('firebase-admin')

const serviceAccount = require('./firebasekeys.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const firestore = admin.firestore()
