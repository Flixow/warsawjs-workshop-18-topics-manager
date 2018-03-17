import Syncano from 'syncano-server'
import fetch from 'node-fetch'

export const FETCH_PROFILE_URL = `https://api.github.com/user`;

export default (ctx) => {
  const {response} = Syncano(ctx)

  const {access_token} = ctx.args
  const queryParams = `access_token=${access_token}`;

   const profileURL = `${FETCH_PROFILE_URL}?${queryParams}`;

   const options = {
     method: 'GET'
   };

   return fetch(profileURL, options)
     .then(res => res.json())
       .then(res => {
         response.json(res)
       });
}
