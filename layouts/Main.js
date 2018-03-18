import {connect} from 'react-redux'

import globalCss from '../styles/globals'

import {Head, Nav} from '../components'
import {fetchProfile} from '../actions/user'
import {fetchTopics} from '../actions/topics'

class MainLayout extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProfile()
    this.props.fetchTopics()
  }

  render() {
    const {userProfile, children} = this.props

    return (
      <div>
        <Head title="Home" />
        <Nav user={userProfile} />

        <main>
          {children}
        </main>

        <style jsx global>{globalCss}</style>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: Lato,sans-serif;
          }

          :global(*) {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(({user}) => ({
  userProfile: user.profile
}), {
  fetchProfile,
  fetchTopics,
})(MainLayout)
