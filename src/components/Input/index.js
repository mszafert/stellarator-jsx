import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Input({ type, name, placeholder, label, value, size, error }) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                size={size}
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    error: PropTypes.string
};

Input.defaultProps = {
    type: 'text'
};

export default Input;