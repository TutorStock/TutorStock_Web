const initState = {
    tutors:[
        {id:'1',name:'jose',bio:"my name is jose",subjects:"calculus",rating:"4.7"},
        {id:'2',name:'gabriela',bio:"my name is gabriela",subjects:"Biology",rating:"3"},
        {id:'3',name:'Samuel',bio:"my name is samuel",subjects:"Java",rating:"5"}
        ]
}


const tutorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TUTOR_REQUEST':
            console.log('Created a tutor request', action.request);
            return state;
        case 'CREATE_TUTOR_REQUEST_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
    
    
//   switch (action.type) {
//     case 'CREATE_PROJECT_SUCCESS':
//       console.log('create project success');
//       return state;
//     case 'CREATE_PROJECT_ERROR':
//       console.log('create project error');
//       return state;
//     default:
//       return state;
//   }
};

export default tutorReducer;