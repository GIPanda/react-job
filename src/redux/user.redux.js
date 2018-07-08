import axios from 'axios'
import { getRedirectPath } from '../util';

// action types
const REGISTER_SUCCESS = 'Register success';
const ERROR_MSG = 'Error message'

// actions
function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: null,
  pwd: null,
  type: null
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg};
    default:
      return state;
  }
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatPwd, role}) {
  if (!user || !pwd) {
    return errorMsg('Please input username and password');
  }

  if(pwd !== repeatPwd) {
    return errorMsg('Inputed passwords not identical');
  }

  return dispatch => {
    axios.post('/user/register', {user, pwd, role})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, role}));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  }


}
