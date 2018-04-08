import React from 'react';

import cssWrapper from './css_wrapper.js';

export var Row = cssWrapper('data-table__row');

// Receives a list of row elements, each of which is a fixed height.
export class DataTable extends React.Component {
    hasChildren() {
        return this.props.children ? true : false;;
    }

    getChildren() {
        if (this.hasChildren())
            return Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return [];
    }

    pagify(rows, numberPerPage) {
        var rowCount = 0;
        var pageCount = 0;

        var pages = [];
        while(rowCount < rows.length) {
            pages.push(rows.slice(rowCount, rowCount + numberPerPage));

            pageCount += 1;
            rowCount += numberPerPage;
        }

        // Should be at least one page.
        if (pages.length === 0)
            pages.push([]);

        // Add null rows in to fill the gap.
        while(pages[pages.length - 1].length < numberPerPage)
            pages[pages.length - 1].push(<Row/>);

        return pages;
    }

    // TODO: these keys are not unique, I just get annoyed by the warning.
    keyify(rows) {
        var index = 0;

        return rows
            .map(row => React.cloneElement(row, { key: index++ }));
    }

    render() {
        return <div className='data-table'>
            {this.keyify(this.pagify(this.getChildren(), 5)[0])}
        </div>;
    }
}
