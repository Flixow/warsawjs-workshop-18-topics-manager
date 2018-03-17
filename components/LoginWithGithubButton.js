import {Button} from './'
import {CLIENT_ID, CLIENT_SECRET} from '../constants/github'

const LoginWithGithubButton = ({children}) => {
  const redirectToGithubAuth = () => {
    const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    });

    location.href = `https://github.com/login/oauth/authorize?${queryParams.toString()}`
  }

  return (
    <Button onClick={redirectToGithubAuth}>
      {children}
    </Button>
  );
}

export default LoginWithGithubButton;
