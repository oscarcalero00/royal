import PropTypes from "prop-types";
import React from "react";
import {
  container,
  ToolbarMobileactive,
  ToolbarMobileinactive,
} from "./ToolbarMobile.module.scss";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

const ToolbarMobile = ({ title, onBack, onApply }) => {
  return (
    <div className={container}>
      <ArrowBackIos style={{ color: "#4577dc" }} onClick={(e) => onBack()} />
      <div>
        <h3>{title}</h3>
      </div>
      <a onClick={(e) => onApply()}>APPLY</a>
    </div>
  );
};

ToolbarMobile.propTypes = {};

ToolbarMobile.defaultProps = {};

export default ToolbarMobile;
