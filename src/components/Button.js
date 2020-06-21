import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ href, children }) => {
  return (
    <a className="btn" href={href}>
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
