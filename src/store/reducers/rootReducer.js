import authReducer from './authReducer'
import tutorReducer from './tutorReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  tutor: tutorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer