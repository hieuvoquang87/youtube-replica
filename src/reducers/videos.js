/**
 * Created by hieuvo on 4/10/16.
 */
import { List, Map} from 'immutable';
import { UPDATE_VIDEOS, SELECT_VIDEO} from 'actions/videos';

import {ActionTypes as CollectionsActionTypes} from 'actions/collections_actions';

const initialState = {
    videos: [],
    selectedVideo: null,
};

export function videos (state = initialState, action) {
    switch (action.type) {
        case UPDATE_VIDEOS:
            return {videos: action.payload};
        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            };
        case CollectionsActionTypes.PLAY_SELECTED_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            };
        default:
            return state;
    }
}