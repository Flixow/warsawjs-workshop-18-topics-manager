import withRedux from 'next-redux-wrapper'
import initStore from '../utils/store'

import MainLayout from '../layouts/Main'

import {TopicCard, Input} from '../components'

import {createTopic, likeTopic} from '../actions/topics'

class Home extends React.Component {
  state = {
    newTopicInput: ''
  }

  handleInputChange = evt => {
    this.setState({newTopicInput: evt.target.value})
  }

  handleAddNewTopic = evt => {
    evt.preventDefault()
    this.props.createTopic({
      title: this.state.newTopicInput,
    })
    this.setState({newTopicInput: ''})
  }

  render() {
    const {topics} = this.props
    const {newTopicInput} = this.state

    return (
      <MainLayout>
        <form onSubmit={this.handleAddNewTopic}>
          <Input
            type="text"
            placeholder="Dodaj nowy temat"
            onChange={this.handleInputChange}
            value={newTopicInput}
          />
          <button>Submit</button>
        </form>

        {topics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            likeIt={this.props.likeTopic}
          />
        ))}
      </MainLayout>
    )
  }
}

export default withRedux(initStore, ({topics}) => ({
  topics: topics.list
}), {
  createTopic,
  likeTopic,
})(Home)
