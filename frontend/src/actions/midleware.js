import { getCategoriesAction } from './categories';
import { getCommentsAction, addCommentAction, editCommentAction, deleteCommentAction } from './comments';
import { getPostsAction, addPostAction, addVoteAction, deletePostAction, editPostAction } from './posts';

export function getCategories(url){
  	return (dispatch) => {
	fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 } )
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(getCategoriesAction(data.categories)); 
      })
      .catch((error) => console.log(error));
    }
}

export function getPosts(url){
  	return (dispatch) => {
	fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 } )
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(getPostsAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function addPost(url, body){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'POST', 
        body: JSON.stringify(body)
      };
	fetch(url, request)
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(addPostAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function addComment(url, body){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'POST', 
        body: JSON.stringify(body)
      };
	fetch(url, request)
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(addCommentAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function editPost(url, body){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'PUT', 
        body: JSON.stringify(body)
      };
	fetch(url, request)
      .then((res) => { return(res.json()) })
      .then((data) => {
      	console.log('MIDELWAREEEEEEE', data)
        dispatch(editPostAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function editComment(url, body){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'PUT', 
        body: JSON.stringify(body)
      };
	fetch(url, request)
      .then((res) => { return(res.json()) })
      .then((data) => {
      	console.log('MIDELWAREEEEEEE', data)
        dispatch(editCommentAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function addVote(url, body){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'POST', 
        body: JSON.stringify(body)
      };
      
	fetch(url, request)
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(addVoteAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function deletePost(url, idPost){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'DELETE'
      };
	fetch(url, request)
      .then((data) => { 
      	console.log('DELETING', data)
        dispatch(deletePostAction(idPost)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function deleteComment(url, idComment){
  	return (dispatch) => {
      const request = { 
        headers: { 
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        }, 
        
        method: 'DELETE'
      };
	fetch(url, request)
      .then((data) => { 
        dispatch(deleteCommentAction(idComment)); 
      })
      .catch((error) => console.log(error));
    }  
}

export function getComments(url){
  	return (dispatch) => {
	fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 } )
      .then((res) => { return(res.json()) })
      .then((data) => {
        dispatch(getCommentsAction(data)); 
      })
      .catch((error) => console.log(error));
    }  
}


