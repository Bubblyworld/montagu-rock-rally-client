import React from 'react';
import Select from 'react-select';

// Renders a drop-down option thing, takes in a name, options and defaultValue
// prop. The options are an object with label and value properties.
export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: props.defaultValue || ''
        }
    }

    handleChange(selectedValue) {
        this.setState({ selectedValue });
    }

    render() {
        var { selectedValue } = this.state;

        return <div className='drop-down'>
            <Select
                name={this.props.name}
                value={selectedValue && selectedValue.value}
                onChange={this.handleChange.bind(this)}
                options={this.props.options}
            />
        </div>;
    }
}
