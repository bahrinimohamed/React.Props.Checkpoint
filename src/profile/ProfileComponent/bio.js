import React from "react";
import PropTypes from "prop-types";
const BioComponent = (props) => {
  return (
    <>
      <h3 style={{ color: "black", textAlign: "center" }}>{props.bio}</h3>
    </>
  );
};
BioComponent.propTypes = {
  bio: PropTypes.string
};
export default BioComponent;
