import {parse} from 'querystring'
import withRedux from 'next-redux-wrapper'
import initStore from '../utils/store'

import Router from 'next/router'
import {authorize, fetchProfile} from '../actions/user'

class Auth extends React.PureComponent {
  async componentDidMount() {
    const {href} = window.location
    const search = href.substr(href.indexOf('?') + 1)
    const params = parse(search)

    this.props.authorize(params.code)
    Router.push('/')
  }

  render() {
    return <div>Loading...</div>
  }
}

export default withRedux(initStore, () => ({}), {
  authorize,
  fetchProfile,
})(Auth)
