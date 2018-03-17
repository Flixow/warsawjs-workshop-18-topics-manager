import {SET_USER} from './'

export const authorize = code => async (dispatch, getState, {api}) => {
  const user = await api.user.login(code)
  if (user.user_key) {
    localStorage.setItem('user_key', user.user_key)
    dispatch(fetchProfile())
  }
}

export const fetchProfile = () => async (dispatch, getState, {api}) => {
  const profile = await api.user.fetchProfile()

  dispatch({
    type: SET_USER,
    payload: {profile},
  })
}
