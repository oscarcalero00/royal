import PropTypes from "prop-types";
import React from "react";
import * as styles from "./ToolbarMobile.module.scss";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

const ToolbarMobile = ({ title, onBack, onApply }) => {
  return (
    <div className={styles["container"]}>
      <ArrowBackIos style={{ color: "#4577dc" }} onClick={(e) => onBack()} />
      <div>
        <h3>{title}</h3>
      </div>
      <a onClick={(e) => onApply()}>APPLY</a>
    </div>
  );
};

ToolbarMobile.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

ToolbarMobile.defaultProps = {};

export default ToolbarMobile;
