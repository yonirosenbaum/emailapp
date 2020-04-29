import axios from 'axios';
import {FETCH_USER} from './types';

// below is redux-thunk function
const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
};

// with promises alternative
{/*
export const fetchUser = () => {
    return function (dispatch){
      axios.get('/api/current_user')
        .then(res => dispatch({type: FETCH_USER, payload: res}))
    }  
};
*/}

const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({type: FETCH_USER, payload: res.data})
}; 

export {fetchUser, handleToken};