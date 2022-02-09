import PropTypes from 'prop-types';
import React from 'react';
import '../styles/App.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <h1 className="display">
        { value }
      </h1>
    );
  }
}

Display.defaultProps = {
  value: 0,
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
