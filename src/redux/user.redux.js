import axios from 'axios'
import { getRedirectPath } from '../util';

// action types
const LOGIN_SUCCESS = 'Login success';
const REGISTER_SUCCESS = 'Register success';
const ERROR_MSG = 'Error message'
const LOAD_DATA = 'Load data';

// actions
function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data}
}

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  username: null,
  type: null
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
    case LOGIN_SUCCESS:
      return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg};
    default:
      return state;
  }
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

export function loadData(data) {
  return {type: LOAD_DATA, payload: data};
}

export function login({username, pwd}) {
  if (!username || !pwd) {
    return errorMsg('Please input username and password');
  } else {
    return dispatch => {
      axios.post('/user/login', {username, pwd})
        .then(res => {
          if (res.status === 200 && res.data.code === 0) {
            dispatch(loginSuccess(res.data.data));
          } else {
            dispatch(errorMsg(res.data.msg));
          }
        });
    }
  }

}

export function register({username, pwd, repeatPwd, role}) {
  if (!username || !pwd) {
    return errorMsg('Please input username and password');
  }

  if(pwd !== repeatPwd) {
    return errorMsg('Inputed passwords not identical');
  }

  return dispatch => {
    axios.post('/user/register', {username, pwd, role})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, role}));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  }
}