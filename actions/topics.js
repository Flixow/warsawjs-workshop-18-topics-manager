import {SET_TOPICS, PUSH_TOPIC} from './'

export const createTopic = topic => async (dispatch, getState, {api}) => {
  const newTopic = await api.topics.create(topic)

  dispatch({
    type: PUSH_TOPIC,
    topic: newTopic,
  })
}

export const fetchTopics = () => async (dispatch, getState, {api}) => {
  const topics = await api.topics.fetch()

  dispatch({
    type: SET_TOPICS,
    topics,
  })
}
