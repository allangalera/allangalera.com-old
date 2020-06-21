import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const Button = ({ href, children }) => {
  return (
    <a css={styles.btn} href={href}>
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
