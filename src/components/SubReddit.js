import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../actions';
import PropTypes from 'prop-types';
import Post from './Post';
import FullView from './FullView';

const mapStateToProps = (state) => ({
    subreddit: state.redditsReducer.subreddit || {},
    requestInFlight: state.redditsReducer.requestInFlight,
});


const mapDispatchToProps = {
    fetchPostsAction,
}


class SubReddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFullView: false,
            fullViewUrl: '',
        };
    }

    renderPosts = (subreddit = []) => {
        const { post, requestInFlight } = this.props;
        const filteredPost = (subreddit || []).filter(post => post.data.thumbnail !== 'self');
        console.log('a', filteredPost);
        if (filteredPost) {
            return (
                filteredPost.map((post, index) => (
                    <Post
                        key={index}
                        post={post.data}
                        isLoading={requestInFlight}
                        toggleFullView={this.toggleFullView}
                    />
                ))
            )
        }
        else return null;
    };

    toggleFullView = (url = '') => {
        this.setState((prev) => ({
            isFullView: !prev.isFullView,
            fullViewUrl: url,
        }), () => {
            document.body.style.overflowY = this.state.isFullView ? "hidden" : 'scroll';
        });
    }

    render() {
        return (
            <div>
                {this.state.isFullView && <FullView handleClose={this.toggleFullView} url={this.state.fullViewUrl} />}
                <React.Fragment>
                    {this.props.isFetching && <div>fetching......</div>}
                    {this.props.subreddit && <div className="reddit-list">{this.renderPosts(this.props.subreddit)}</div>}
                </React.Fragment>
            </div>
        );
    }
}

SubReddit.propTypes = {
    subreddit: PropTypes.array,
    requestInFlight: PropTypes.bool
}

SubReddit.defaultProps = {
    subreddit: [],
    requestInFlight: false,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubReddit);