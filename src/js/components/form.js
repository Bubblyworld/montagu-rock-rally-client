import React from 'react';

import Card from './card.js';
import cssWrapper from './css_wrapper.js';

// Encapsulates a generic form, which consists of a list of field blocks,
// followed by a footer typically containing submit and cancel buttons.
export class Form extends React.Component {
    render() {
        var _Form = cssWrapper('form');

        return <_Form>
            <Card>
                {this.props.children}
            </Card>
        </_Form>
    }
}

// The blocks of fields and the footer containing buttons.
export var Block = cssWrapper('form__block', 'form__field');
export var Footer = cssWrapper('form__footer', 'form__button');
