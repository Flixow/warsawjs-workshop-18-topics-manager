import Syncano from 'syncano-server'
import fetch from 'node-fetch'

export const CLIENT_ID = '71af2a44af21c9ef7f6b'
export const CLIENT_SECRET = 'eea9100c3a00d1f0b8b6cb7a4279f08b0f82e3e4'

export const FETCH_ACCESS_TOKEN_URL = `https://github.com/login/oauth/access_token`;
export const FETCH_PROFILE_URL = `https://api.github.com/user`;

export default (ctx) => {
  const {response, socket, users} = Syncano(ctx)

  const {code} = ctx.args

  const queryParams = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`

  const accessTokenURL = `${FETCH_ACCESS_TOKEN_URL}?${queryParams}`;
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    }
  };

  return fetch(`${accessTokenURL}`, options)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        response.json({access_token: null}, 400)
        return null;
      }

      return socket.get('auth/fetchUserFromGithub', {access_token: res.access_token})
        .then(async userData => {
          const user = await users
            .firstOrCreate(
            {
              username: userData.id,
            },
            {
              username: userData.id,
              password: Math.random().toString(36).slice(-8),
              email: userData.email,
              full_name: userData.name || user.login,
              avatar_url: userData.avatar_url,
              githubUrl: userData.url
            }
          )
          response.json(user)
        })
      })
    .catch(error => {
      console.log(error)
      return null;
    });
}
