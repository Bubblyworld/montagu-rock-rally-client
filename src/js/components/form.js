import React from 'react';

function cssWrapper(className) {
    return class extends React.Component {
        render() {
            return <div className={className}>
                {this.props.children}
            </div>;
        }
    }
}

// Encapsulates a generic form, which consists of a list of field blocks,
// followed by a footer typically containing submit and cancel buttons.
export var Form = cssWrapper('form');
export var Block = cssWrapper('form__block');
export var Footer = cssWrapper('form__footer');
