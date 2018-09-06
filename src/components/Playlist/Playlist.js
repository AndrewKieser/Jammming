import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
	constructor(props) {
		super(props);

		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(event) {
		this.onNameChange(event.target.value);
	}

	render() {
		return (
			<div class="Playlist">
				<input onChange={this.handleNameChange} value="New Playlist"/>
				<Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval='true' />
				<a class="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		)
	}
}

export default Playlist;