import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPost extends Component {

  state = {
    formValues: {},
    postToUpdate: null
  }

  componentWillMount = () => {
    try{
        if(this.props.actionData !== undefined) {
          let post = this.props.posts.filter((post) => (this.props.actionData.location.pathname.includes(post.id)))
          this.setState({
            postToUpdate: post[0]
          })          
    }}
    catch(err){
    }
  }

	handleChange = (event) => {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;
        this.setState({formValues});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actionPost(event, this.state.formValues);
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className='p-container'>
          <span>POST</span>
        </p>

        <select name='category' onChange={this.handleChange} >
          {this.props.categories.map((category) => (
          <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>

        <div  className='inset'>
          <input type='text' name='title' placeholder='Title' value={this.state.formValues['name']} onChange={this.handleChange} defaultValue={this.state.postToUpdate && this.state.postToUpdate.title}></input>
        </div>
        <div className='inset'>
          <input type='text' name='body' placeholder='Body' value={this.state.formValues['name']} onChange={this.handleChange} defaultValue={this.state.postToUpdate && this.state.postToUpdate.body}></input>
        </div>
        <div className='inset'>
          <input type='text' name='author' placeholder='Author' value={this.state.formValues['name']} onChange={this.handleChange} defaultValue={this.state.postToUpdate && this.state.postToUpdate.author}></input>
        </div>
        
        <button className='button-two' type='submit'>
          <span>Submit</span>
        </button>
      </form>
    )
  }
}

  function mapStateToProps (state) {
    return {
      categories: state.categories,
      posts: state.posts
    }
  }

export default connect(mapStateToProps)(AddPost)