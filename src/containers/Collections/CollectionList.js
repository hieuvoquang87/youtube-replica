/**
 * Created by hieuvo on 4/24/16.
 */
import React, {Component, PropTypes} from 'react';

export default class CollectionList extends Component {
    render () {
        return (
            <ul className="list-group">
                <li className="list-group-item active"><h5>Saved Collections</h5></li>
                <li className="list-group-item">Dapibus ac fa  lisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item list-group-item-info">
                    <span className="glyphicon glyphicon-plus pull-left"></span>&nbsp;&nbsp;Create Collection
                </li>
            </ul>
        );
    }
}