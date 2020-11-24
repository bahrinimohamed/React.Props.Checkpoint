import React from "react";
import PropTypes from "prop-types";
const HandleComponent = (props) => {
  return <button onClick={props.handleClick}>Click me</button>;
};
HandleComponent.propTypes = {
  handleClick: PropTypes.func
};
export default HandleComponent;
