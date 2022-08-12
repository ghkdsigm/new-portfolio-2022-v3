import { USER_COLEECTION } from '../firebase'

export default async (tweet, currentUser) => {
  // 유저정보추가
  const doc = await USER_COLEECTION.doc(tweet.uid).get()
  tweet.profile_image_url = doc.data().profile_image_url
  tweet.email = doc.data().email
  tweet.username = doc.data().username
   
  return tweet
}