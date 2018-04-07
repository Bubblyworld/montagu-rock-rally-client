import React from 'react';

// Encapsulates a generic form, which consists of a list of field blocks,
// followed by a footer typically containing submit and cancel buttons.
export class Form extends React.Component {
    render() {
        return <div className='form'>
            {this.props.children}
        </div>;
    }
}

function cssWrapper(containerClass, childClass) {
    return class extends React.Component {
        renderChild(child) {
            return <div className={childClass}>
                {child}
            </div>;
        }

        render() {
            return <div className={containerClass}>
                {this.props.children.map(this.renderChild)}
            </div>;
        }
    }
}

// The blocks of fields and the footer containing buttons.
export var Block = cssWrapper('form__block', 'form__field');
export var Footer = cssWrapper('form__footer', 'form__button');
