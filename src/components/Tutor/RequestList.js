import React from 'react'
import RequestSummary from './RequestSummary'


const RequestList = ({requests,user,tutors}) => {
    console.log(requests)
    console.log(user)
  return (
    <div className="project-list section">
        {requests && requests.map(request => {
        if(request.user_id===user.uid){
          return(
            <RequestSummary request={request} user={user} tutors={tutors}/>
          )
        }
        })}
        
    </div>
  )
}

export default RequestList;