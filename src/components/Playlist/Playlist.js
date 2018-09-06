import React from 'react';
import './Playlist.css';

class Playlist extends React.Component {
	render() {
		<div class="Playlist">
			<input value="New Playlist"/>
			<Tracklist tracks={this.props.playlistTracks} />
			<a class="Playlist-save">SAVE TO SPOTIFY</a>
		</div>
	}
}

export default Playlist;