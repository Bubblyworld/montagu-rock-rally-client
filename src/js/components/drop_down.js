import React from 'react';
import Select from 'react-select';

// Renders a drop-down option thing, takes in a name, options and defaultValue
// prop. The options are an object with label and value properties.
export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        var defaultOption = '';
        if (props.defaultValue) {
            props.options.forEach(option => {
                if (option.value === props.defaultValue)
                    defaultOption = option;
            });
        }

        this.state = {
            selectedValue: defaultOption
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
