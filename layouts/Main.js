import {connect} from 'react-redux'

import {Head, Nav} from '../components'
import {fetchProfile} from '../actions/user'

class MainLayout extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProfile()
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
})(MainLayout)
