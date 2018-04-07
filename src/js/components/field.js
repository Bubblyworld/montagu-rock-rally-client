import React from 'react';
import classname from 'classname';

// Intended to encapsulate a combination of a label and input item,
// for use within login, register and submission forms.
export default class Field extends React.Component {
    render() {
        return <div className={classname('field', this.props.className)}>
            <div className='field__label'>
                {this.props.label}
            </div>

            <div className='field__input'>
                {this.props.input}
            </div>
        </div>;
    }
}
