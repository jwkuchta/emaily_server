import axios from 'axios'
import { FETCH_USER } from './types'

// export const fetchUser = () => {
//     return dispatch => {
//         axios.get('/api/current_user')
//         .then(resp => dispatch({type: FETCH_USER, payload: resp}))
//     }  
// }

export const fetchUser = () => async dispatch => {
    const resp = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: resp.data})
}  

export const handleToken = token => async dispatch => {
    const resp = await axios.post('/api/stripe', token)
    dispatch({ type: FETCH_USER, payload: resp.data})
}

export const submitSurvey = values => async dispatch => {
    const resp = await axios.post('/api/surveys', values)
    dispatch({ type: FETCH_USER, payload: resp.data})
}