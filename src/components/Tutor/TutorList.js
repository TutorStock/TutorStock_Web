import React from 'react'
import TutorSummary from './TutorSummary'


const TutorList = ({tutors}) => {
  return (
    <div className="project-list section">
        {tutors && tutors.map(tutor => {
          return(
            <TutorSummary tutor={tutor} key={tutor.id}/>
          )
        })}
    </div>
  )
}

export default TutorList;