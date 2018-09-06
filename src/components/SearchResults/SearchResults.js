import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
	render() {
		<div className="SearchResults">
  			<h2>Results</h2>
			<Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd} />
		</div>
	}
}

export default SearchResults;