import {CORS_PROXY} from '../constants'
import {CLIENT_ID, CLIENT_SECRET, FETCH_ACCESS_TOKEN_URL, FETCH_PROFILE_URL} from '../constants/github'

export default {
  user: {
    getAccessToken: code => {
      const queryParams = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code
      });

      const accessTokenURL = `${CORS_PROXY}${FETCH_ACCESS_TOKEN_URL}?${queryParams.toString()}`;
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      };

      return fetch(`${accessTokenURL}`, options)
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.error(response);
            return null;
          }

          return response.access_token;
        })
        .catch(() => {
          return null;
        });
    },
    fetchProfile: accessToken => {
      const queryParams = new URLSearchParams({
         access_token: accessToken
       });

       const profileURL = `${FETCH_PROFILE_URL}?${queryParams.toString()}`;

       const options = {
         method: 'GET'
       };

       return fetch(profileURL, options)
           .then((response) => response.json());
    }
  }
}
