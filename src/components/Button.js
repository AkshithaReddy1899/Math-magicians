import PropTypes from 'prop-types';

function Button(props) {
  const { text, className } = props;
  return (
    <button type="button" className={className}>{text}</button>
  );
}

Button.defaultProps = {
  className: 'btn',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
