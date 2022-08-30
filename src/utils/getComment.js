import { COMMENT_COLEECTION } from '../firebase'

export default async (comment) => {
  // 코멘트정보추가
  const doc = await COMMENT_COLEECTION.doc(comment.id).get()
  comment.title = doc.data().title
  comment.body = doc.data().body
   
  return comment
}