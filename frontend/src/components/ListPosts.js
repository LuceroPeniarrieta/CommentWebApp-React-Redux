import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/midleware';
import Post from './Post'; 

class ListPosts extends Component {

  componentDidMount () {
    this.props.listPosts.sort(this.propComparator('voteScore', this.props.sortType)).map((post) => 
      this.props.getCommentsProp(getComments(`http://localhost:3001/posts/${post.id}/comments`))
    )
  }
  
  propComparator = (propName, type) => (
      (a, b) => {
        let comparison = 0;
        (type.includes('Vote')) ? propName = 'voteScore' : propName = 'timestamp'
        
        switch (type) {
          case 'Vote: Max':
          case 'Timestamp: Max':
            (a[propName] < b[propName]) ? comparison = 1 : (a[propName] > b[propName]) ? comparison = -1 : comparison = 0
            break;

          case 'Vote: Min':
          case 'Timestamp: Min':
            (a[propName] < b[propName]) ? comparison = -1 : (a[propName] > b[propName]) ? comparison = 1 : comparison = 0
            break;
            
          default:
            return comparison;

      }
    return comparison;
    }
  )
  
  render() {
      const { listPosts, sortType } = this.props;

      return (
        	<div>
            {listPosts.sort(this.propComparator('voteScore', sortType)).map(post => (
               <Post key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                author={post.author}
                category={post.category}
                timestamp={post.timestamp}
                voteScore={post.voteScore}
        		    detailView='true'
                />
              ))}
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
    getCommentsProp: (path) => dispatch(path)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);