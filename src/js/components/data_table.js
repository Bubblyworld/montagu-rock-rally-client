import React from 'react';

export class Row extends React.Component {
    render() {
        return <div className='data-table__row'>
            {this.props.children}
        </div>;
    }
}

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

            console.log(pages);
        return pages;
    }

    render() {
        return <div className='data-table'>
            {this.pagify(this.getChildren(), 5)[0]}
        </div>;
    }
}
