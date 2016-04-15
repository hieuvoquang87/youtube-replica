/**
 * Created by hieuvo on 4/10/16.
 */
import YTSearch from 'utils/youtubeApi';

const API_KEY = 'AIzaSyC8VWyhJ9Q9FdKUEOv1tUcPChZxOl-mp3s';

export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

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