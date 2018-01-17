import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Text({ children, heading, size }) {
    return (
        heading
            ? <h1>{children}</h1>
            : <p className={size}>{children}</p>
    );
}

Text.propTypes = {
    heading: PropTypes.bool,
    size: PropTypes.string
};

Text.defaultProps = {
    heading: false,
    size: 'medium'
};

export default Text;