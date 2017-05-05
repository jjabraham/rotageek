import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ hide, message, type }) => {
  if (hide) return null;
  const alertClass = `alert alert-${type}`;
  return (
    <div className={alertClass} role="alert">{message}</div>
  );
};

Alert.propTypes = {
  hide: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
};

export default Alert;
