// library
import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SubReddit from "./SubReddit";
import SideNavBar from "./SideNavBar";
import { getSubreddit, getRequestStatus } from "../reducers/redditsReducer";
import { fetchPostsAction } from "../actions";


class Container extends Component {
  static proptTypes = {
    location: PropTypes.object,
    params: PropTypes.object,
    subreddit: PropTypes.array,
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    subreddit: [],
  }

  componentDidMount() {
    const { params: { subreddit } } = this.props;
    this.props.fetchPostsAction(subreddit || 'popular');
  }

  componentDidUpdate(nextProps, nextState) {
    const { params: { subreddit } } = this.props;
    if (nextProps.params.subreddit !== subreddit) {
      this.props.fetchPostsAction(subreddit);
    }
  }

  render() {
    return (
      <div className="main-content">
        <SubReddit {...this.props} />
        <SideNavBar {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subreddit: getSubreddit(state),
  isFetching: getRequestStatus(state),
});


export default connect(
  mapStateToProps, {
    fetchPostsAction,
  }
)(Container);
