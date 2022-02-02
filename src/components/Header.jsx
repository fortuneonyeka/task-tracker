import PropTypes from 'prop-types';
import Button from "./Button";
const Header = ({title, onAdd, showAdd}) => {
  
  return <div>
    <header className="header">
      <h1>{title}</h1>
     <Button color="green" text={showAdd ? 'Close' : 'Add'}  onClick={onAdd}/>
     
      {/* <h1 style={headingStyling}>{title}</h1> */}
      {/* OR */}
      {/* <h1 style={{color: "indigo", backgroundColor:"black", fontSize:50}}>{title}</h1> */}
      
    </header>
  </div>;
};

//DEFAULT PROPS
// Header.defaultProps = {
//   title:"Taks Tracker App",
//   location: "Lagos"
// }
Header.propTypes = {
  title: PropTypes.string.isRequired
}

// const headingStyling = {
//   color: "indigo", backgroundColor:"black", fontSize:50
// }
export default Header;
