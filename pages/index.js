import withRedux from 'next-redux-wrapper'
import initStore from '../utils/store'

import MainLayout from '../layouts/Main'

const Home = () => (
  <MainLayout>

  </MainLayout>
)

export default withRedux(initStore)(Home)
