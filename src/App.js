import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './components/ResultsList';
import SearchForm from './components/SearchForm';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'ruby') => {
		axios
			.get(
				`https://hn.algolia.com/api/v1/search?query=${query}`
			)
			.then(data => {
				this.setState({ results: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">HNSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ResultsList data={this.state.results} />}
				</div>
			</div>
		);
	}
}
