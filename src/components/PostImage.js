import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const getImageUrl = (resolutions) => {
    if (resolutions) {
        return resolutions[resolutions.length - 1].url;
    }
    return null
}

const PostImage = ({
    handleImageClick,
    url,
    resolutions,
}) => {
    return (
        <div className="post-image" >
            <img
                onClick={() => handleImageClick(getImageUrl(resolutions))}
                src={url}
                width="300"
                height="300"
            />
        </div>
    )

};

PostImage.propTypes = {
    handleonClick: PropTypes.func,
    image: PropTypes.func.isRequired,
};

PostImage.defaultProps = {
    image: {},
}

export default PostImage;