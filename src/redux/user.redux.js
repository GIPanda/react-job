import axios from 'axios'

// action types
const REGISTER_SUCCESS = 'Register success';
const ERROR_MSG = 'Error message'

// actions
function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

const initState = {
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
      return {...state, msg:'', isAuth: true, ...action.payload};
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg};
    default:
      return state;
  }
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatPwd, type}) {
  if (!user || !pwd) {
    return errorMsg('Please input username and password');
  }

  if(pwd !== repeatPwd) {
    return errorMsg('Inputed passwords not identical');
  }

  return dispatch => {
    axios.post('/user/register', {user, pwd, type})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, type}));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  }


}
