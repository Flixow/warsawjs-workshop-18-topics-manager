import {SET_USER} from './'

export const authorize = code => async (dispatch, getState, {api}) => {
  const access_token = await api.user.getAccessToken(code)
  if (access_token) {
    localStorage.setItem('access_token', access_token)
  }
}

export const fetchProfile = () => async (dispatch, getState, {api}) => {
  const accessToken = localStorage.getItem('access_token')
  const profile = await api.user.fetchProfile(accessToken)

  dispatch({
    type: SET_USER,
    payload: {profile},
  })
}
