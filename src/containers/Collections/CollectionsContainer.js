/**
 * Created by hieuvo on 4/20/16.
 */
import React, { Component, PropTypes } from 'react';

export default class Collections extends Component {

    render () {
        return (
            <div className="container">
                <div className="col-lg-4">
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Panel heading</div>
                        <div className="panel-body">
                            <p>...</p>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>);
    }
}