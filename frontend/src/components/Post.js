import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { addVote, deletePost } from '../actions/midleware';

class Post extends Component {

  
  vote = (idPost, option) => {
    this.props.addVoteProp(addVote(`http://localhost:3001/posts/${idPost}`, {option} ));
  }

	deletePostito = (idPost) => {
      this.props.deletePostProp(deletePost(`http://localhost:3001/posts/${idPost}`, idPost));
  }
  
  render() {
    let buttonDetail = null;
    const commentsLit = this.props.comments.filter((comment) => comment.parentId === this.props.id && comment);
    
    if (this.props.detailView === 'true') {
        buttonDetail = <button className='buttonComment'><Link to={'/posts/' + this.props.category+ '/' + this.props.id}>Detail View</Link></button>	
    } 

    return (
        <div className='post'> 
          <div className="button plus" href="#plus" onClick={(event)=>(this.vote(this.props.id, 'upVote'))}>
            <span className="bg" id="plus"></span>
            <span className="symbol"></span>
          </div>
          <div className="button minus" href="#minus" onClick={(event)=>(this.vote(this.props.id, 'downVote'))}>
            <span className="bg" id="minus"></span>
            <span className="symbol"></span>
          </div>
          <div>{this.props.title}</div>
          <div>{this.props.body}</div>
          <div>{this.props.author}</div>
          <div>{moment(this.props.timestamp).calendar()}</div>
          <div>{this.props.voteScore}</div>
          <div>Comment Number: {commentsLit.length}</div>
          <button className='button' onClick={(event)=>(this.deletePostito(this.props.id))}>Del</button>
          <button className='button'><Link to={'/edit/' + this.props.id}>Edit</Link></button>
          {buttonDetail}
        </div>	
    )
  }
}

  function mapStateToProps (state){
    return {
      comments: state.comments
    }
  };

  function mapDispatchToProps (dispatch) {
    return {
      addVoteProp: (path, option) => dispatch(path, option),
      deletePostProp: (path) => dispatch(path)
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Post);