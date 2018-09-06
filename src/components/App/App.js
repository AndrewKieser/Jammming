import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state.addTrack = this.addTrack.bind(this);

		this.state = {
			searchResults: []
		};
	}

	addTrack(track) {
		if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
			return;
		}
	}

	render() {
		return (
			<div>
				<h1>Ja<span class="highlight">mmm</span>ing</h1>
				<div class="App">
					<SearchBar />
					<div class="App-playlist">
					<SearchResults searchResults={this.searchResults} onAdd={this.addTrack} />
					<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
				</div>
			</div>
		</div>
		);
	}
}

export default App;
