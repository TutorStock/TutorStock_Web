export const createTutorRequest =(request) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        
        const firestore = getFirestore()
        firestore.collection('requests').add({
            ...request,
            approval:0,
        }).then(() => {
            dispatch({ type: 'CREATE_TUTOR_REQUEST', request});
        }).catch((err)=>{
            dispatch({type:'CREATE_TUTOR_REQUEST_ERROR',err});
        })
    }
};