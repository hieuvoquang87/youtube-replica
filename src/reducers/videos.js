/**
 * Created by hieuvo on 4/10/16.
 */
import { UPDATE_VIDEOS, SELECT_VIDEO } from 'actions/videos';

const initialState = {videos: []};

export function videos (state = initialState, action) {
    switch (action.type) {
        case UPDATE_VIDEOS:
            return {videos: action.payload};
        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            }
        default:
            return state;
    }
}