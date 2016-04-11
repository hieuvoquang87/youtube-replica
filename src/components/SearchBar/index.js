import React, { Component } from 'react';

import { styles } from './styles.scss';

export class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    onInputChange (term) {
        this.setState({term: term});
    }
    render () {
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className='input-group col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12'>
                        <input
                            className='form-control' type="text"
                            value={this.state.term}
                            onChange={(event) => this.onInputChange(event.target.value)}
                        />
                    </div>
                </div>
            </section>

        );
    }
}