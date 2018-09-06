import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);

		this.state = {
			searchResults: []
		};
	}

	addTrack(track) {
		if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
			return;
		}
	}

	removeTrack(track) {
		this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
	}

	updatePlaylistName(name) {
		this.setState( this.playListName = name);
	}

	render() {
		return (
			<div>
				<h1>Ja<span class="highlight">mmm</span>ing</h1>
				<div class="App">
					<SearchBar />
					<div class="App-playlist">
					<SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
					<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
				</div>
			</div>
		</div>
		);
	}
}

export default App;
