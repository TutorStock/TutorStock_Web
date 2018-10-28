import React from 'react'
import {Link} from 'react-router-dom'

const TutorSummary = ({tutor}) => {
    return (

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={require("../../obama.jpg")} alt="obama" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{tutor.first_name} {tutor.last_name}<i className="material-icons right">Bio</i></span>
              <span className="card-title activator grey-text text-darken-5">{tutor.subjects}<i className="material-icons right">${tutor.price}/hr</i></span>
              <Link to={'/tutor/'+ tutor.id} >
              <a href="/">Tutor Profile</a>
              </Link>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">X</i></span>
              <p>{tutor.bio}</p>
            </div>
          </div>
            
        
        )
}
export default TutorSummary;