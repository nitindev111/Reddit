import { fetchRedditsApi } from "../api";

const fetchingPosts = () => {
    return {
        type: 'FETCH_REDDITS_IN_PROGRESS',
    };
};

const fetchedPosts = (posts) => {
    return {
        type: 'FETCH_REDDITS_SUCCEEDED',
        data: posts,
    };
};
const failedToFetchPosts = (error) => {
    return {
        type: 'FETCH_REDDITS_FAILED',
        error,
    };
};

export const fetchPostsAction = (category) => (dispatch) => {
    dispatch(fetchingPosts());
    return fetchRedditsApi(category)
        .then(res => res.json())
        .then(res => dispatch(fetchedPosts(res.data)))
        .catch(err => dispatch(failedToFetchPosts(err)));
}