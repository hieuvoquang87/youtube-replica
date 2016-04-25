/**
 * Created by hieuvo on 4/24/16.
 */

export const ActionTypes = {
    PLAY_SELECTED_VIDEO:'PLAY_SELECTED_VIDEO'
}
export function playSelectedVideo (selectedVideo) {
    console.log(selectedVideo);
    return {
        type: ActionTypes.PLAY_SELECTED_VIDEO,
        payload: selectedVideo
    }
}