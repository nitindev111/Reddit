import {
    FETCH_REDDITS_SUCCEEDED,
    FETCH_REDDITS_IN_PROGRESS,
    FETCH_REDDITS_FAILED,
} from '../constants/actions'

const initialState = {
    subreddit: [],
    requestInFlight: false,
    error: {
        msg: '',
        code: ''
    },
};

export const redditsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REDDITS_SUCCEEDED:
            return {
                ...state,
                subreddit: action.data && action.data.children,
                count: action.data && action.data.dist,
                requestInFlight: false,
            }
        case FETCH_REDDITS_IN_PROGRESS:
            return {
                ...state,
                requestInFlight: true,
            }
        case FETCH_REDDITS_FAILED:
            return {
                ...state,
                requestInFlight: false,
                error: action.data,
            }
        default: return {
            ...initialState,
        }
    }
}

export default redditsReducer;

// Selectors 

export const getSubreddit = (state) => state.redditsReducer.subreddit || [];
export const getRequestStatus = (state) => state.requestInFlight;