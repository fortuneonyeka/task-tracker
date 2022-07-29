import PropTypes from 'prop-types';

const Button = ({color,text, onClick:handleClick}) => {
  return <div>
     <button onClick={handleClick} style={{backgroundColor:color}} className="btn">{text}</button>
  </div>;
};

// Button.defaultProps = {
//   color:"indigo",
//   text: "Add Me"
// }

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func.isRequired
}
export default Button;
