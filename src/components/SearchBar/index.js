import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import { styles } from './styles.scss';

export class SearchBar extends Component {
    static propTypes = {
        onSearchTermInput: PropTypes.func.isRequired
    }
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        };
        this.debounceSearchTermChange = _.debounce((term) => this.props.onSearchTermInput(term), 500);
    }
    onInputChange (event) {
        const term = event.target.value;
        this.setState({term});
        this.debounceSearchTermChange(term);
    }
    render () {
        return (
            <div className={`${styles}`}>
                <div className='input-group '>
                    <span className="input-group-addon">Search</span>
                    <input
                        className='form-control' type="text"
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
}