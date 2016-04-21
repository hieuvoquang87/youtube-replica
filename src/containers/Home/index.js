import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

/* components */

import {TopImage} from 'components/TopImage';
import {Tools} from 'components/Tools';
import {Projects} from 'components/Projects';


import {YouTubeSearch} from 'containers/YouTubeSearch';
import {Collections} from 'containers/Collections';

const metaData = {
    title: 'YouTube Replica',
    description: 'Start you project easy and fast with modern tools',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
        },
    },
};

export class Home extends Component {
    render() {
        return (
            <section>
                <DocumentMeta {...metaData} />
                <YouTubeSearch />
                <Collections />
            </section>
        );
    }
}
