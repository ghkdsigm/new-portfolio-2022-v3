import { BOARD_COLEECTION, USER_COLEECTION } from '../firebase'
import firebase from 'firebase'
import store from '../store'

export default (selectedcategory, boardBody, edittext, currentUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = BOARD_COLEECTION.doc()
      await doc.set({
        id: doc.id,
        category:selectedcategory,
        board_body: boardBody,
        body:edittext,
        uid: currentUser.uid,
        created_at: Date.now(),
        num_comments: 0,
        num_retweets: 0,
        num_likes: 0,
        //upload_image_url: store.state.uploadimg.upload_image_url
      })

      await USER_COLEECTION.doc(currentUser.uid).update({
        num_tweets: firebase.firestore.FieldValue.increment(1),
      })

      resolve(true)
    } catch (e) {
      reject(e)
    }
  })
}