import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/midleware';

class Comment extends Component{
  
  deleteComment = (idComment) => {
      this.props.deletePostProp(deleteComment(`http://localhost:3001/comments/${idComment}`, idComment));
  }
  
  render(){
    return(
      <div className='comment'> 
      	  <div>{this.props.author}</div>
      	  <div>{this.props.body}</div>
      	  <div>{this.props.timestamp}</div>
          <div>{this.props.voteScore}</div>
      	  <button className='button' onClick={(event)=>(this.deleteComment(this.props.idComment))}>Del</button>
      	  <button className='button'> 
          	<Link to={'/detailView/' + this.props.idPost + '/editComment/' + this.props.idComment}>Edit</Link>
          </button>
      </div>
    )
  }
}

  function mapDispatchToProps (dispatch) {
    return {
      deletePostProp: (path) => dispatch(path)
    }
  };

export default connect(() => ({}), mapDispatchToProps)(Comment);