import React from 'react';

// Encapsulates a simple single-line radio button system.
// Must be given a unique name prop, as well as a list of options, given as an
// object with a label and value property (much like the drop-down). Also takes
// an optional defaultValue prop.
export default class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: props.defaultValue || ''
        };
    }

    changeHandler(option) {
        return () => {
            this.setState({ selectedValue: option.value });
        };
    }

    renderRadio(option) {
        var checked = option.value === this.state.selectedValue;

        return <div className='radio-input' key={option.value}>
            <input
                type='radio'
                name={this.props.name}
                value={option.value}
                checked={checked}
                onChange={this.changeHandler(option).bind(this)}
                className='radio-input__button'
            />

            <label className='radio-input__label'> {option.label} </label>
        </div>;
    }

    render() {
        return <div className='radio'>
            {this.props.options.map(this.renderRadio.bind(this))}
        </div>;
    }
}
