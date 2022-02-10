import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, className, handleClick } = this.props;
    return (
      <button type="button" className={className} value={text} onClick={() => handleClick(text)}>{text}</button>
    );
  }
}

Button.defaultProps = {
  className: 'btn',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
