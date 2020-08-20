import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as reduxForm } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    form: reduxForm // convention to have "form" as the key for this reducer
})