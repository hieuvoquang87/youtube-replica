/**
 * Created by hieuvo on 4/10/16.
 */
import React, {Component} from 'react';

export class VideoListItem extends Component {
    onAddVideoClickHandle(e) {
        e.stopPropagation();
        this.props.onVideoToCollectionAdded(this.props.video);
    }

    render() {
        return (
            <li className='list-group-item' onClick={() => this.props.onItemSelected(this.props.video)}>
                <div className='video-list media'>
                    <div className='media-left'>
                        <img className='media-object' src={this.props.video.snippet.thumbnails.default.url}/>
                    </div>
                    <div className='media-body'>
                        <div className='media-heading'>
                            {this.props.video.snippet.title}
                        </div>
                    </div>
                    <span className="glyphicon glyphicon-plus pull-right add-button"
                          onClick={this.onAddVideoClickHandle.bind(this)}></span>
                </div>
            </li>);
    }
}
