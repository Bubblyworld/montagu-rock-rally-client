import React from 'react';

import Card from './card.js';

// Encapsulates a generic form, which consists of a list of field blocks,
// followed by a footer typically containing submit and cancel buttons.
export class Form extends React.Component {
    render() {
        return <div className='form'>
            <Card>
                {this.props.children}
            </Card>
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
            var contained;
            if (Array.isArray(this.props.children)) {
                contained = this.props.children.map(this.renderChild);
            } else {
                contained = this.props.children ? this.renderChild(this.props.children) : null;
            }

            return <div className={containerClass}>
                {contained}
            </div>;
        }
    }
}

// The blocks of fields and the footer containing buttons.
export var Block = cssWrapper('form__block', 'form__field');
export var Footer = cssWrapper('form__footer', 'form__button');
