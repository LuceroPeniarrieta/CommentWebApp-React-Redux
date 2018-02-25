import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddComment extends Component{
  
  state = {
      formValues: {},
      commentToUpdate: null
  }

  componentWillMount = () => {
    try{
        if(this.props.actionData !== undefined) {
          let comment = this.props.comments.filter((comment) => (this.props.idPostComment.includes(comment.id)))
          this.setState({
            commentToUpdate: comment[0]
          })     
    }}
    catch(err) {
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
    this.props.actionComment(event, this.state.formValues);
  }

  render(){
    return(
       <form onSubmit={this.handleSubmit}>
		    <p className='p-container'>
          <span>COMMENT</span>
        </p>

        <div className='inset'>
          <input type='text' name='body' placeholder='Body' value={this.state.formValues['name']} onChange={this.handleChange} defaultValue={this.state.commentToUpdate && this.state.commentToUpdate.body}></input>
        </div>

        <div className='inset'>
          <input type='text' name='author' placeholder='Author' value={this.state.formValues['name']} onChange={this.handleChange} defaultValue={this.state.commentToUpdate && this.state.commentToUpdate.author}></input>
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
      comments: state.comments
    }
  }

export default connect(mapStateToProps)(AddComment);