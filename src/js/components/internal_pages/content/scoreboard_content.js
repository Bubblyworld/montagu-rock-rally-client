import React from 'react';

import { DataTable } from '../../data_table.js';
import DropDown from '../../drop_down.js';
import Field from '../../field.js';
import Card from '../../card.js';

export default class ScoreboardContent extends React.Component {
    render() {
        return <div className='scoreboard-content'>
            <Card>
                <div className='scoreboard-content__category'>
                    <Field
                        className='field--40-60'
                        label={<span> Category: </span>}
                        input={<DropDown/>}
                    />
                </div>

                <DataTable/>
            </Card>
        </div>;
    }
}
