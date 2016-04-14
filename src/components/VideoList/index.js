/**
 * Created by hieuvo on 4/10/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { VideoListItem } from './video_list_item.js';

import { styles } from './styles.scss';

export class VideoList extends Component  {
    static propTypes = {
        onItemSelected: PropTypes.func.isRequired
    }
    constructor (props) {
        super(props);
        this.renderVideoList = this.renderVideoList.bind(this);
    }
    onItemSelected () {

    }
    renderVideoList () {
        return this.props.videos.map((video) => {
            return <VideoListItem
                video={video}
                key={video.etag}
                onItemSelected={this.props.onItemSelected}
            />
        });
    }
    render () {
        return (
            <div className={`${styles}`}>
                <ul className='list-group'>
                    {this.renderVideoList()}
                </ul>
            </div>
        );
    }
}