const userToken = '';
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

	, search: (term) => {
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
				headers: {
					Authorization: `Bearer ${userToken}`
				}
		}).then( response => {
			return response.json();
		}).then( jsonResponse => {
			if (jsonResponse.searchResults) {
				return jsonResponse.searchResults.map(track => ({
					id: track.id
					, name: track.name
					, artist: track.artists[0].name
					, album: track.album.name
					, uri: track.uri
				}));
			}
		});
	}

	, savePlaylist: (playlistName, trackURIs) => {
		if (!playlistName || !trackURIs) {
			return
		}
	}
};

export default Spotify;