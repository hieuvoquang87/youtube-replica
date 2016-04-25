/**
 * Created by hieuvo on 4/24/16.
 */
import React, {Component, PropTypes} from 'react';

export default class CollectionListItems extends Component {
    renderListItem() {
        return this.props.selectedCollection.map((listItem) => {
            return (
                <div key={listItem.etag} className="col-lg-3 col-md-4 col-sm-6"
                    onClick={(e) => {this.props.playSelectedVideo(listItem)}}>
                    <div className="card">
                        <img className="card-img-top" src={listItem.snippet.thumbnails.medium.url}/>
                        <div className="card-block">
                            <h4 className="card-title">{listItem.snippet.title}</h4>
                            <p className="card-text">{listItem.snippet.description}</p>
                            <p className="card-text">
                                <small className="text-muted">{listItem.snippet.publishedAt}</small>
                            </p>
                        </div>
                    </div>
                </div>
            );
        });

    }
    render () {
        return (
            <div className="row">
                <div className="card-deck">
                    {this.renderListItem.bind(this)()}
                </div>
            </div>
        );
    }
}