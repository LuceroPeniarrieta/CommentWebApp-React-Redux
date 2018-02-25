import React, { Component } from 'react';
import CategoryView from './CategoryView';
import AddPost from './AddPost';
import ListPosts from './ListPosts';
import PostDetailView from './PostDetailView';
import AddComment from './AddComment';
import { Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCategories, getPosts, addPost, editPost, addComment, editComment } from '../actions/midleware';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.getCategoriesProp(getCategories(`http://localhost:3001/categories`)); 
    this.props.getPostsProp(getPosts(`http://localhost:3001/posts`));
  }
     
  state = {
    typeSort: 'VoteMax'
  }

  handleChange (type) {
    this.setState ({
        typeSort: type
      })
  }

  addPost = (event, data) => {
        const post = {...data, id: `${Date.now()}`, timestamp: Date.now()}
      	this.props.addPostProp(addPost(`http://localhost:3001/posts`, post));
      	this.props.history.push('/');
  }

  addComment = (event, data) => {
    	let idPost= this.props.location.pathname.replace('/detailView/', '').replace('/addComment', '').trim()
    	const comment = {...data, id: `${Date.now()}`, timestamp: Date.now(), parentId: idPost}
      	this.props.addCommentProp(addComment(`http://localhost:3001/comments`, comment));
      	this.props.history.push('/');
  }

  editPost = (event, data) => {
        let idPost = this.props.location.pathname.replace('/edit/', '').trim();
        const { title, author } = data
        this.props.editPostProp(editPost(`http://localhost:3001/posts/${idPost}`, { title, author }));
        this.props.history.push('/');
  }

  editComment = (event, data) => {
    let idComment = this.props.location.pathname.replace('/detailView/', '').replace('/editComment', '').trim().split('/')[1];
      const { timestamp, body } = {...data, timestamp: Date.now()} 
      this.props.editCommentProp(editComment(`http://localhost:3001/comments/${idComment}`, { timestamp, body }));
      this.props.history.push('/');
  }

  render() {
    const { categories, posts } = this.props;

    return (
          <div>    
            <nav className='navigator'>
              {categories.map(category => (
              <div key={category.name} className='open' value={category.name}>
                  <Link to={'/' + category.name}>{category.name}</Link>
                </div>
              ))}
              <div className='open'>
                  <Link to='/AddPost'>Add_Post</Link>
              </div>
            </nav>

      		<Route exact path='/' render={() => (
      			<div>
      			<select onChange={event => this.handleChange(event.target.value)}>
                   <option key='VoteMin' value='Vote: Min'>Vote: Min</option>
                   <option key='VoteMax' value='Vote: Max'>Vote: Max</option>
                   <option key='TimestampMin' value='Timestamp: Min'>Timestamp: Min</option>
                   <option key='TimestampMax' value='Timestamp: Max'>Timestamp: Max</option>
            </select>

            <ListPosts
              listPosts={posts.filter((post) => (post.deleted === false))}
              sortType={this.state.typeSort}
            />
  				  
      			</div>
          	)}/>
      
			    <Switch>
              {categories.map((category) =>
                  (<Route
                    exact path={'/'+category.name}
                    key={category.name}
                    component={CategoryView}
                  />)
                )
              }
          </Switch>		
          <Route exact path='/addPost' render={() => (
            <AddPost
              actionPost={this.addPost} 
            />
          )}/>

          <Route exact path='/:category/:postid/addComment' render={() => (
            <AddComment
              idPost={this.props.location.pathname.replace('/detailView/', '').replace('/addComment', '').trim()}
              actionComment={this.addComment}
            />
          )}/>
			
          <Route exact path='/:category/:postid/editComment/:commentid' render={() => (
            <AddComment
              idPostComment={this.props.location.pathname.replace('/detailView/', '').replace('/editComment', '').trim()}
              actionComment={this.editComment}
              actionData={this.props}
            />
          )}/>

          <Route exact path='/edit/:postid' render={() => (
            <AddPost
              actionPost={this.editPost}
              actionData={this.props}
            />
          )}/>

          <Route exact path='/posts/:category/:postid' render={() => (
            <PostDetailView
              idPost={this.props.location.pathname}
            />
          )}/>

      </div>
    );
  }
}

  function mapStateToProps (state){
    return {
      categories: state.categories,
      posts: state.posts
    }
  };

  function mapDispatchToProps(dispatch){
      return{
        getCategoriesProp: (path) => dispatch(path),
        getPostsProp: (path) => dispatch(path),
        addPostProp: (path, information) => dispatch(path, information),
        addCommentProp: (path, information) => dispatch(path, information),
        editPostProp: (path, information) => dispatch(path, information),
        editCommentProp: (path, information) => dispatch(path, information)
      }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
