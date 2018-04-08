import React from 'react';

import { DataTable } from '../../data_table.js';
import DropDown from '../../drop_down.js';
import { Field, Label, Input } from '../../field.js';
import Card from '../../card.js';

export default class ScoreboardContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'scoreboard_dropdown',
            defaultValue: 'open',
            options: [
                { label: 'Open', value: 'open' },
                { label: 'U18 Boys', value: 'u18_boys' },
                { label: 'U18 Girls', value: 'u18_girls' }
            ]
        };
    }

    render() {
        return <div className='scoreboard-content'>
            <Card>
                <div className='scoreboard-content__category'>
                    <Field className='field--40-60'>
                        <Label> Category: </Label>
                        <Input>
                            <DropDown {...this.state}/>
                        </Input>
                    </Field>
                </div>

                <DataTable/>
            </Card>
        </div>;
    }
}
