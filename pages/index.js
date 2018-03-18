import withRedux from 'next-redux-wrapper'
import initStore from '../utils/store'

import MainLayout from '../layouts/Main'

import {TopicCard, Input, Button, Wrapper} from '../components'

import {createTopic, likeTopic, setMeAsTrainer} from '../actions/topics'

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
    const {topics, user} = this.props
    const {newTopicInput} = this.state

    return (
      <MainLayout>
        <section className='Intro u-pt- u-pb- u-ta-c'>
          <h1>Stwórz Workshop!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est repudiandae architecto, ipsam natus.
            Dicta impedit nihil nisi, facere a repellat recusandae architecto ipsam corporis aut aliquam iure sunt omnis.
          </p>
        </section>
        <form
          onSubmit={this.handleAddNewTopic}
          className='NewTopicForm--Wrapper u-bg-yellow u-pt- u-pb- u-ta-c'
        >
          <div className="NewTopicForm">
            <h4>Zgłoś propozycję warsztatów</h4>
            <Input
              type="text"
              placeholder="Temat"
              className='u-full'
              onChange={this.handleInputChange}
              value={newTopicInput}
            />
            <br/>
            <div className='u-ta-r u-mt-'>
              <Button>Prześlij</Button>
            </div>
          </div>
        </form>

        <Wrapper>
          <section>
            <h2>Zgłoszone tematy</h2>

            <ul className='TopicList'>
              {topics.map(topic => {
                const canIBeTrainer = user.id && !topic.trainers.find(trainer => trainer.id === user.id)

                return (
                  <li key={topic.id}>
                    <TopicCard
                      topic={topic}
                      likeIt={this.props.likeTopic}
                      setMeAsTrainer={this.props.setMeAsTrainer}
                      canIBeTrainer={canIBeTrainer}
                    />
                  </li>
                )
              })}
            </ul>
          </section>
        </Wrapper>

        <style jsx>{`
          .Intro p {
            max-width: 700px;
            display: inline-block;
          }

          .NewTopicForm {
            width: 600px;
            display: inline-block;
          }

          .TopicList {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
          }
        `}</style>
      </MainLayout>
    )
  }
}

export default withRedux(initStore, ({topics, user}) => ({
  topics: topics.list,
  user: user.profile,
}), {
  createTopic,
  likeTopic,
  setMeAsTrainer,
})(Home)
