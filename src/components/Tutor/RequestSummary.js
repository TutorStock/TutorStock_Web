import React from 'react'

const RequestSummary = ({request, user, tutors}) => {
    console.log("request")
    console.log(request)
    
    if(request.approval===0){
        return (

          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Tutor</span>
                  <p>{request.message}</p>
                </div>
                <div class="card-action">
                  <h5>Pending</h5>
                </div>
              </div>
            </div>
          </div>    
           
            
        
        )
    }
    if(request.approval===1){
        return (

          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Tutor</span>
                  <p>{request.message}</p>
                </div>
                <div class="card-action">
                  <h3>Approved</h3>
                </div>
              </div>
            </div>
          </div>    
           
            
        
        )
    }
    if(request.approval===-1){
        return (

          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Tutor</span>
                  <p>{request.message}</p>
                </div>
                <div class="card-action">
                  <h3>Rejected</h3>
                </div>
              </div>
            </div>
          </div>    
           
            
        
        )
    }
    
}
export default RequestSummary;