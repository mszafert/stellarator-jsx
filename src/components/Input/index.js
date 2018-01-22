import React from 'react';
import PropTypes, { func } from 'prop-types';
import './styles.css';

function Input({ type, name, placeholder, label, value, size, error, onInputChange }) {
    return (
        <div>
            {label ? <label>{label}</label> : ''}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                size={size}
                className={`size-${size}`}
                onChange={onInputChange}
            />
            {error ? <p className='error'>{error}</p> : ''}
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    size: 'medium'
};

export default Input;
