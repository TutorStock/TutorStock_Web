import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTutorRequest } from '../../store/actions/tutorActions'
// import {firestoreConnect} from 'react-redux-firebase'
// import { compose } from 'redux'
import {Redirect} from 'react-router-dom'


class CreateTutorRequest extends Component {
  myTutorId = this.props.match.params.id;
  auth=this.props.auth;
  mydate= new Date();
  
  state = {
    tutor_id: this.myTutorId,
    name:'',
    subject:'',
    date: this.mydate,
    message:'',
    user_id: this.props.auth.uid
    
  }
  

  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createTutorRequest(this.state)
    
  }
  render() {
    console.log(this.props.auth.uid)
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} action="/">
          <h5 className="grey-text text-darken-3">Request Tutor</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">FullName</label>
          </div>
          <div className="input-field">
            <input type="text" id='subject' onChange={this.handleChange} />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="input-field">
            <textarea id="message" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className="input-field">
            <input type="datetime-local" id='date' name="Date"/>
          </div>
          
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    createTutorRequest: (request) => dispatch(createTutorRequest(request))
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return{
    auth:state.firebase.auth,
    // tutors: state.firestore.data.tutors
  }
}

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),firestoreConnect([
//     {collection: 'tutors'}
//     ])
//   )(CreateTutorRequest)


export default connect(mapStateToProps,mapDispatchToProps)(CreateTutorRequest);
