import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, className, handleclick } = this.props;
    return (
      <button type="button" className={className} value={text} onClick={handleclick}>{text}</button>
    );
  }
}

Button.defaultProps = {
  className: 'btn',
};

Button.propTypes = {
  text: PropTypes.number.isRequired,
  className: PropTypes.string,
  handleclick: PropTypes.func.isRequired,
};

export default Button;
