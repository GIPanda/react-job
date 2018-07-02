import axios from 'axios';

// action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const LOAD_USER = 'LOAD_USER';

// reducer
const initState = {
  isAuth: false,
  name: 'gipanda',
  age: 20
}

export function auth(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    case LOAD_USER:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

// actions
export function getUserData() {
  return dispatch => {
    axios.get('/data')
      .then(res => {
        if (res.status === 200) {
          dispatch(loadUser(res.data));
        }
      });
  }
}
export function loadUser(data) {
  return {type: LOAD_USER, payload: data};
}
export function login() {
  return {type: LOGIN};
}
export function logout() {
  return {type: LOGOUT};
}
