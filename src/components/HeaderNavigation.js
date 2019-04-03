import React, { Component } from 'react';


class HeaderNavigation extends Component {
    render() {
        const { params: { subreddit } } = this.props;
        return (
            <div className="heading">
                <h1>Reddit</h1>
                <span>{`r/${subreddit || 'popular'}`}</span>
            </div>
        );
    }
}

export default (HeaderNavigation);