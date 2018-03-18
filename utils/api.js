import Syncano from 'syncano-client'

import {CORS_PROXY} from '../constants'
import {CLIENT_ID, CLIENT_SECRET, FETCH_ACCESS_TOKEN_URL, FETCH_PROFILE_URL} from '../constants/github'


const syncano = new Syncano('topic-manager')

const setToken = () => {
  const token = window.localStorage.getItem('user_key')
  syncano.setToken(token)
}

export default {
  user: {
    login: code => syncano.get('auth/login', {code}),
    fetchProfile: () => {
      setToken()
      return syncano.get('auth/getUser')
    },
  },
  topics: {
    create: data => syncano.post('topics/add', data),
    fetch: () => syncano.post('topics/fetch'),
    likeIt: id => syncano.post('topics/likeIt', {id}),
    setUserAsTrainer: id => {
      setToken()
      return syncano.post('topics/setUserAsTrainer', {id})
    },
  },
}
