import {connect} from 'react-redux'

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

        {children}
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
