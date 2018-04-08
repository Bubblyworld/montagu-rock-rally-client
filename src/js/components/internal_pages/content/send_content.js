import React from 'react';

import { Form, Block, Footer } from '../../form.js';
import DropDown from '../../drop_down.js';
import Radio from '../../radio.js';
import Button from '../../button.js';

export default class SendContent extends React.Component {
    render() {
        return <div className='send-content'>
            Crag: <DropDown/>
            Wall: <DropDown/>
            Route: <DropDown/>
            Style: <Radio/>

            <Button/>
        </div>;
    }
}
