import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Notification({ children, type }) {
    return (
        <p className={type}>{children}</p>
    );
}

Notification.propTypes = {
    type: PropTypes.string
};

Notification.defaultProps = {
    type: 'info'
};

export default Notification;