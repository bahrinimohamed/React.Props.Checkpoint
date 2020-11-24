import React from "react";
import PropTypes from "prop-types";
const ProfessionComponent = (props) => {
  return (
    <>
      <h3
        style={{ color: "red", fontFamily: "Lucida Sans", textAlign: "center" }}
      >
        {props.profession}
      </h3>
    </>
  );
};
ProfessionComponent.propTypes = {
  profession: PropTypes.string
};
export default ProfessionComponent;
