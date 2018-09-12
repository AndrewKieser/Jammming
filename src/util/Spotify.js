let userToken;
const clientID = '3f19930ed1354091926d98e6dc458415';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken() {
		if(userToken) {
			return userToken;
		}
		
		const URLToken = window.location.href.match( /access_token=([^&]*)/ );
		const tokenExpiration = window.location.href.match( /expires_in=([^&]*)/ );
		
		if ( URLToken && tokenExpiration ) {
			userToken = URLToken[1];
			const expires = Number( tokenExpiration[1] );
			window.setTimeout( () => userToken = '', expires * 1000 );
			window.history.pushState( 'Access Token', null, '/' );
			return userToken;
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
		}
	}

	, search: (term) => {
		let accessToken = Spotify.getAccessToken();
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
		}).then( response => {
			return response.json();
		}).then( jsonResponse => {
			if (!jsonResponse.tracks) {
				return [];
			}

			return jsonResponse.tracks.items.map(track => ({
				id: track.id
				, name: track.name
				, artist: track.artists[0].name
				, album: track.album.name
				, uri: track.uri
			}))
		})
	}

	, savePlaylist: (playlistName, trackURIs) => {
		let accessToken = Spotify.getAccessToken();
		let userID;

		if (!playlistName || !trackURIs || trackURIs.length === 0) {
			return;
		}

		return fetch('https://api.spotify.com/v1/me', {
			headers: {
				Authoriation: `Bearer ${accessToken}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			userID = jsonResponse.id;

			return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
					method: 'POST'
					, headers: {
						Authorization: `Bearer ${accessToken}`
					}
					, body: JSON.stringify({
						name: playlistName
					})
				}).then( response => {
					response.json();
				}).then( jsonResponse => {
					let playlistID = jsonResponse.id;

					return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
							method: 'POST'
							, headers: {
								Authorization: `Bearer ${accessToken}`
							}
							, body: JSON.stringify({
								uris: trackURIs
							})
					})
				});
			});
	}
};

export default Spotify;