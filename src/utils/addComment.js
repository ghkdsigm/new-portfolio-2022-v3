import { COMMENT_COLEECTION, USER_COLEECTION } from '../firebase'
import firebase from 'firebase'
import store from '../store'

export default (cTitle, cBody) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = COMMENT_COLEECTION.doc()
      await doc.set({
        id: doc.id,
        title: cTitle,
        body: cBody,
        created_at: Date.now(),
      })

      // await db.collection("users").doc("UgpYqUs1mZgLQb43fg6B4okeig53").update({
      //   num_tweets: firebase.firestore.FieldValue.increment(1),
      // })

      resolve(true)
    } catch (e) {
      reject(e)
    }
  })
}