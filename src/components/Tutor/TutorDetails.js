import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


const TutorDetails = (props) => {
  const {tutor, auth} = props;  
  if(!auth.uid) return <Redirect to='/signin'/>
  if(tutor){
    return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={require("../../obama.jpg")} alt="obama" />
            </div>
              <span className="card-title">{tutor.first_name} {tutor.last_name}</span>
              <p>{tutor.bio}</p>
              
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>{tutor.subjects}</div>
              <div>{tutor.time_available}</div>
            </div>
              <Link to={'/CreateTutorRequest/'+ tutor.tutor_id} >
              <a href="/">Request meeting</a>
              </Link>
          </div>
          
        </div>
  )
  }  
  else{
      return(
          <div className="container center">
            <p>Loading project...</p>
          </div>
          )
  }
  
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id
    const tutors = state.firestore.data.tutors
    const tutor = tutors ? tutors[id]: null;
    return {
        tutor:tutor,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'tutors'}
        ])
)(TutorDetails)