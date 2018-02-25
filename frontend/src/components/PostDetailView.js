import React, { Component } from 'react';
import Comment from './Comment';
import Post from './Post';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { getComments } from '../actions/midleware';

class PostDetailView extends Component {
  
  componentDidMount() {
      const post = this.props.posts.filter((post) => (this.props.idPost.includes(post.id)))[0]
      try {
        if(post !== undefined){
          this.props.getCommentsProp(getComments(`http://localhost:3001/posts/${post.id}/comments`));
        }
        
      } catch (error) {
        
      }
  }
  
  render() {
    const post = this.props.posts.filter((post) => (this.props.idPost.includes(post.id)))[0]

   try {
          if(post.deleted !== true) {
              return(
                <div>
                  <h1>{post.title}</h1>
                  <h2>BODY: {post.body}</h2>
                  <h2>AUTHOR: {post.author}</h2>
                  <h2>TIMESTAMP: {post.timestamp}</h2>
                  <h2>VOTE SCORE: {post.voteScore}</h2>

                  <Post key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    timestamp={post.timestamp}
                    voteScore={post.voteScore}
                    detailView='false'
                  />

                  {this.props.comments.map((comment) => (
                        <Comment key={comment.id}
                          body={comment.body}
                          author={comment.author}
                          timestamp={comment.timestamp}
                          voteScore={comment.voteScore}
                          idComment={comment.id}
                          idPost={post.id}
                        />  
                  ))}

                  <div className='open'> 
                    <Link to={'/detailView/' + post.id + '/addComment'}>+</Link>
                  </div>
                </div>
              )
        }
        else {
          return <NotFoundPage/>
        }
    } catch (error) {
      return <NotFoundPage/>
    }
  }
}

  function mapStateToProps (state){
    return {
      posts: state.posts,
      comments: state.comments
    }
  };

  function mapDispatchToProps(dispatch){
    return{
      getCommentsProp: (path) => dispatch(path)
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailView);