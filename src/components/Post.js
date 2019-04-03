import React from 'react';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import moment from 'moment';

class Post extends React.Component {

    renderImage = ({ url, height, width, resolutions }) => (
        <PostImage
            url={url}
            handleImageClick={this.props.toggleFullView}
            width={width}
            height={height}
            resolutions={resolutions}
        />
    );

    render() {
        const { post: {
            author_fullname,
            created_utc,
            title,
            num_comments,
            subreddit_name_prefixed,
            preview
        }, isFetching } = this.props;

        const imageProps = {
            url: preview && preview.images[0] && preview.images[0].source.url,
            height: preview && preview.images[0] && preview.images[0].source.height,
            resolutions: preview && preview.images[0] && preview.images[0].resolutions,
        };
        console.log('created', created_utc)
        var posted = moment(created_utc * 1000).toNow(true);
        return (
            <React.Fragment>
                <div className="post-card">
                    <div className="header-info">
                        <div className="subreddit-prefix">
                            <p>{subreddit_name_prefixed}</p>
                        </div>
                        <div className="author-fullname">
                            <p>Posted By {author_fullname}</p>
                        </div>
                        <div className="time-created">
                            <p>
                                {posted} ago
                            </p>
                        </div>
                    </div>
                    <div className="post-title">
                        <span>{title}</span>
                    </div>
                    {imageProps && this.renderImage(imageProps)}
                    <div className="post-footer">
                        <span>Comments {num_comments}</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
Post.propTypes = {
    post: PropTypes.object.isRequired,
    handleImageClick: PropTypes.func,
    isLoading: PropTypes.bool,
};

Post.defaultProps = {
    post: {},
}

export default Post;
