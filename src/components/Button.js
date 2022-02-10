import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, text, handleClick } = props;
  return (
    <button type="button" className={className} value={text} onClick={() => handleClick(text)}>{text}</button>
  );
};

Button.defaultProps = {
  className: 'btn',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
