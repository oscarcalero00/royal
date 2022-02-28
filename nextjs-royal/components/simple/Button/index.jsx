import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Button.module.scss";

const Button = ({ textButton }) => {
  return (
    <input type={"button"} value={textButton} className={styles["container"]} />
  );
};

Button.propTypes = {
  textButton: PropTypes.string,
};

Button.defaultProps = {
  textButton: "SEARCH CRUISE",
};

export default Button;
