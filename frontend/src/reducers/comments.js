import { GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions/comments';

export function comments(state = [], action){
  
  switch(action.type){
    case GET_COMMENTS:
      return action.comments;
      
    case ADD_COMMENT:
      return [...state, action.comment];
      
    case EDIT_COMMENT:
      return state.map((comment) => {
        if(comment.id === action.comment.id){
          comment = action.comment
        }
        return comment; 
      })
      
    case DELETE_COMMENT:
      var copyDelete = state;
      return copyDelete.filter((comment) => (comment.id !== action.idComment))

    default:
      return state;
  }
}