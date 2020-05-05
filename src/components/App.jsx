import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
class App extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<div key={post.id} className="item">
					<i className="icon aligned middle user" />
					<div className="content">
						<a href="/#" className="header">
							{post.title}
						</a>
						<div className="description">{post.body}</div>
					</div>
					<div className="content">
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}
	getContent() {
		if (!this.props.posts.length) {
			return (
				<div className="ui segment">
					<div className="ui active inverted dimmer">
						<div className="ui text loader">Loading</div>
					</div>
					<p />
				</div>
			);
		} else {
			return <div className="ui relaxed divided list">{this.renderPosts()}</div>;
		}
	}
	render() {
		return <div className="ui container">{this.getContent()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(App);
