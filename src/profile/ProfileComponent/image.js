import React from "react";
import PropTypes from "prop-types";
export default function ProfilPhoto(props) {
  return (
    <div style={{ border: "solid1pxBlack", maxWidth: "50vw", class: "center" }}>
      <img src={props.photo} alt="profile" />
    </div>
  );
}
ProfilPhoto.propTypes = {
  photo: PropTypes.string
};
