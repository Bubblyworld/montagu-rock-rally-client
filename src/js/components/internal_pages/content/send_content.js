import React from 'react';

import DropDown from '../../drop_down.js';
import Radio from '../../radio.js';
import Button from '../../button.js';

export default class SendContent extends React.Component {
    render() {
        return <main className='send-content'>
            Crag: <DropDown/>
            Wall: <DropDown/>
            Route: <DropDown/>
            Style: <Radio/>

            <Button/>
        </main>;
    }
}
