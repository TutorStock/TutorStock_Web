import React, { Component } from 'react'
import TutorList from '../Tutor/TutorList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import RequestList from '../Tutor/RequestList'

class Dashboard extends Component {
  render(){
    //console.log(this.props)
    const {tutors, requests, auth} = this.props
    
    return (
      <div className="dashboard container">
      <h3>Tutors</h3>
        <div className="row">
          <div className="col s12 m6">
            <TutorList tutors={tutors}/>
          </div>
          <div className="col s12 m5 offset-m1">
          <h3>Requests</h3>
            <RequestList requests={requests} user={auth} tutors={tutors}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return{
    tutors: state.firestore.ordered.tutors,
    requests: state.firestore.ordered.requests,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tutors' },{collection:'requests'}
    ])
  )(Dashboard);