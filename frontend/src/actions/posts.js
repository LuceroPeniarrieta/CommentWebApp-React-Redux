export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POSTS = 'GET_POSTS';
export const ADD_VOTE = 'ADD_VOTE';

export function getPostsAction(posts){
  return {
    type: GET_POSTS,
    posts
  }
}

export function addPostAction(post){
  return {
    type: ADD_POST,
    post
  }
}

export function editPostAction(post){
  return {
    type: EDIT_POST,
    post
  }
}

export function deletePostAction(idPost){
  return {
    type: DELETE_POST,
    idPost
  }
}

export function addVoteAction(post){
  return {
    type: ADD_VOTE,
    post
  }
}