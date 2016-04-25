/**
 * Created by hieuvo on 4/10/16.
 */
import YTSearch from 'utils/youtubeApi';

const API_KEY = 'AIzaSyC8VWyhJ9Q9FdKUEOv1tUcPChZxOl-mp3s';

export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const ADD_VIDEO_TO_COLLECTION = 'ADD_VIDEO_TO_COLLECTION';

export function updateVideos (videos) {
    return {
        type: 'UPDATE_VIDEOS',
        payload: videos
    }
}
export function selectVideo (video) {
    return {
        type: 'SELECT_VIDEO',
        payload: video
    }
}

export function searchVideo (term) {
    return (dispatch, getState) => {
        YTSearch({key: API_KEY, term: term, maxResults: 10},
            (videos) => {
                dispatch(updateVideos(videos));
            }
        );
    }
}
function duplicateVideoFound () {
    console.log("Duplicate Video");
}
export function addVideoToCollection (video) {
    return (dispatch, getState) => {
        let selectedCollection = getState().collections.selectedCollection;
        let isFound = false;
        for(let i in selectedCollection) {
            if(video.id.videoId == selectedCollection[i].id.videoId) {
                isFound = true;
            }
        }
        if(isFound) {
            duplicateVideoFound();
        } else {
            dispatch({
                type: ADD_VIDEO_TO_COLLECTION,
                payload: video
            })
        }
    };
}