import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class App extends Component {
	componentDidMount() {
		console.log(this.props.state, 'PROPS');
		// this.props.posts();
	}
	render() {
		return <div className="ui container">hello</div>;
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(App);
