import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {

	addTrack() {
		
	}

	render() {
		return (
			<div class="TrackList">
				{
					this.props.searchResults.map(track => {
						return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
					})
				}
			</div>
		)
	}
}

export default Tracklist;