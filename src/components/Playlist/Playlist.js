import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
	constructor(props) {
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}

	render() {
		return (
			<div className="Playlist">
				<input
					onChange={this.handleNameChange}
					defaultValue="New Playlist"/>
				<Tracklist
					tracks={this.props.playlistTracks}
					onRemove={this.props.onRemove}
					isRemoval={true} />
				<a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
				<a className="Playlist-save" href='https://open.spotify.com/collection/playlists' >VIEW SPOTIFY LIBRARY</a>
			</div>
		)
	}
}

export default Playlist;