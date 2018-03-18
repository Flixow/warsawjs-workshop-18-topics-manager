import Link from 'next/link'
import cssVariables from '../styles/cssVariables'
import {LoginWithGithubButton, Head} from './'

const Nav = ({user}) => (
  <nav>
    <ul>
      {user.id ? (
        <h4 className='UserWelcome'>Witaj {user.full_name}!</h4>
      ) : (
        <React.Fragment>
          <span className='u-mr--'>Zaloguj się przez GitHub</span>
          <LoginWithGithubButton>
            Logowanie
          </LoginWithGithubButton>
        </React.Fragment>
      )}
    </ul>

    <style jsx>{`
      nav {
        background-color: ${cssVariables.colours.black};
        color: #fff;
        text-align: center;
        padding: 10px 0;
      }

      .UserWelcome {
        margin: 0;
      }

      ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
      }

      nav > ul {
        padding: 4px 16px;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
