/**
 * Created by hieuvo on 4/20/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CollectionList from './CollectionList';
import CollectionListItems from './CollectionListItems';

import * as actionCreators from 'actions/collections_actions';

@connect(
    state => state.collections,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class Collections extends Component {

    render() {
        return (
            <div>
                <div className="col-lg-3">
                    <CollectionList {...this.props}/>
                </div>
                <div className="col-lg-9">
                    <CollectionListItems {...this.props} />
                </div>
            </div>);
    }
}