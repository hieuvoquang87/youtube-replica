/**
 * Created by hieuvo on 4/12/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';


import * as actionCreators from 'actions/videos';
import { styles } from './styles.scss';

import { SearchBar } from 'components/SearchBar';
import { VideoList } from 'components/VideoList';
import { YouTubeFrame } from 'components/YouTubeFrame';



@connect(state => state.videos, dispatch => bindActionCreators(actionCreators, dispatch))
export class YouTubeSearch extends Component {
    render () {
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <SearchBar {...this.props} onSearchTermChange={this.props.searchVideo.bind(this)} />
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 space-bottom-10">
                        <YouTubeFrame {...this.props} selectedVideo={this.props.selectedVideo}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoList {...this.props} onItemSelected={this.props.selectVideo.bind(this)}/>
                    </div>
                </div>
            </section>
        );
    }
}

