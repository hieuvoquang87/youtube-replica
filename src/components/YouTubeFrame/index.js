/**
 * Created by hieuvo on 4/13/16.
 */
import React, {Component} from 'react';

export class YouTubeFrame extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const video = this.props.selectedVideo;//this.props.video ? this.props.video : this.props.videos[0];
        if(!video) {
            return <div>Loading ...</div>
        }
        const videoId = video.id.videoId;
        const url = `http://www.youtube.com/embed/${videoId}`;
        return (
            <div className='video-detail'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url}></iframe>
                </div>
                <div className='details'>
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
}