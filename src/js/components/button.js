import React from 'react';
import classname from 'classname';

export default class Button extends React.Component {
    render() {
        return <div className={classname('button', this.props.className)}>
            {this.props.children}
        </div>;
    }
}
