import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPosts from './ListPosts';

class CategoryView extends Component{
  render () {
    const category = this.props.match.url.replace('/', '');
    const posts = this.props.posts.filter((post) => (post.category === category));
    console.log('postsss', posts);
    
    return(
      <div>
        <ListPosts
          listPosts={posts}
          sortType= 'VoteMax'
        />
      </div>
    )
  }
}

 function mapStateToProps (state){
    return {
      posts: state.posts
    }
  };

export default connect(mapStateToProps)(CategoryView);