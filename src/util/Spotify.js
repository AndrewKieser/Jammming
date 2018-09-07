const userToken;
const clientID = '3f19930ed1354091926d98e6dc458415';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken: (userToken) => {
		userToken ? '' : 'userToken';

		if (!userToken) {
			userToken = window.location.href.match(/access_token=([^&]*)/)
			const expiresIn = window.location.href.match(/expires_in=([^&]*)/)

			window.setTimeout(() => userToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
		}
	}
}

export default Spotify;