/**
 * Created by hieuvo on 4/24/16.
 */
/**
 * Created by hieuvo on 4/10/16.
 */
import { List, Map} from 'immutable';
import { ADD_VIDEO_TO_COLLECTION } from 'actions/videos';

const initialState = {
    collections: [
        {
            name: 'Collection 1',
            videos: []
        },
        {
            name: 'Collection 2',
            videos: []
        }
    ],
    selectedCollection: []
};

export function collections (state = initialState, action) {
    switch (action.type) {
        case ADD_VIDEO_TO_COLLECTION:
            let isFound = false;
            for(let i in state.selectedCollection) {
                if(action.payload.id.videoId == state.selectedCollection[i].id.videoId) {
                    isFound = true;
                }
            }
            if(isFound) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    selectedCollection: [...state.selectedCollection, action.payload]
                };
            }
        default:
            return state;
    }
}