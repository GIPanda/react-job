import axios from 'axios';

const USER_LIST = 'USER_LIST'

const initState = {
  userList: []
}

export function chat(state = initState, action) {
  switch (action.type) {
    case USER_LIST:
      return {...state, userList:action.payload}
    default:
      return state;
  }
}

function userList(data) {
  return { type:USER_LIST, payload: data }
}

export function getUserList(role) {
  return dispatch => {
    axios.get(`/user/list?role=${role}`)
      .then(res => {
        if (res.data.code === 0) {
          dispatch(userList(res.data.data));
        }
      });
  }
}
