import React from 'react';

import DataTable from '../../data_table.js';
import DropDown from '../../drop_down.js';

export default class ScoreboardContent extends React.Component {
    render() {
        return <main className='scoreboard-content'>
            Category: <DropDown/>

            <DataTable/>
        </main>
    }
}
