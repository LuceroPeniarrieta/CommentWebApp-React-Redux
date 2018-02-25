import { GET_POSTS, ADD_POST, ADD_VOTE, DELETE_POST, EDIT_POST } from '../actions/posts';

export function posts(state = [], action){
  
  switch(action.type){
    case GET_POSTS:
      return action.posts;
      
    case ADD_POST:
      return [...state, action.post];
      
    case EDIT_POST:
      return state.map((post) => {
        if(post.id === action.post.id){
          post = action.post
        }
        return post; 
      })
      
    case ADD_VOTE:
      var copy = state;
      return copy.map((post => {
        if(post.id === action.post.id){
           post.voteScore = action.post.voteScore
        }
        return post;
      }))
	
    case DELETE_POST:
      var copyDelete = state;
      return copyDelete.filter((post) => (post.id !== action.idPost))

    default:
      return state;
  }
}