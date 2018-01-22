import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

function Form({config}) {
    return (
        <form>
            {config.map((item, i) => {
                return (
                    <Input
                        key={i}
                        name={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        label={item.label}
                        error={item.error}
                    />
                )
            })}
        </form>
    );
}

Form.propTypes = {
    config: PropTypes.array.isRequired
}

export default Form;