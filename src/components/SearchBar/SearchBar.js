import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleEnterKey = this.handleEnterKey.bind(this);
	}

	search(term){
		this.props.onSearch(this.state.term);
	}

	handleTermChange(event) {
		event.preventDefault();
		let term = event.target.value;
		sessionStorage.setItem('term', term);
		this.setState({
			term: event.target.value
		})
	}

	handleEnterKey(event) {
		if (event.keyCode === 13)
			this.search();
 	}

 	componentWillMount() {
        let term = sessionStorage.getItem('term'); 
        if (term) {
            this.setState({ 
            	term: term
            })
        }
    }

	render() {
		return (
		<div className="SearchBar">
			<input
				placeholder="Enter A Song, Album, or Artist"
				onChange={this.handleTermChange}
				onKeyDown={this.handleEnterKey}
				value={this.state.term} />
			<a onClick={this.search} >SEARCH</a>
		</div>
	);
  }
}

export default SearchBar;