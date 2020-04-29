import {FETCH_USER} from '../actions/types';

export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
      case FETCH_USER:
        return action.payload || false;
         
      default:
        return state;
    }
  };

  // FETCH_USER occurs when the component mounts,
  // so default will tell you when the component is loading
  // therefore if state = null we know the component
  // is still waiting for the AJAX request ie is loading.

  // FETCH_USER- if someone has called logout ie res.logout from
  // the request '/api/logout' the cookie is removed and the payload
  // will be an empty string. Since empty string is a falsy value
  // this will return false if there is no res.data (which
  // only exists if the user is logged in).