/**
 * Created by hieuvo on 4/10/16.
 */

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