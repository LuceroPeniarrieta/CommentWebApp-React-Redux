export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';

export function getCommentsAction(comments){
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function addCommentAction(comment){
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function editCommentAction(comment){
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function deleteCommentAction(idComment){
  return {
    type: DELETE_COMMENT,
    idComment
  }
}