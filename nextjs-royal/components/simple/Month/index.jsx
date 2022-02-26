import PropTypes from "prop-types";
import React from "react";
import {
  container,
  Monthactive,
  Monthinactive,
} from "./Month.module.scss";

const Month = ({ idMonth, nameMonth, activeMonth, bridgetMonth, onClick }) => {
    
  const getContainerClass = (active) =>
    !active ? `${container} ${Monthinactive}` : `${container} ${Monthactive}`;
  return (
    <div className={getContainerClass(activeMonth)} onClick={(e) => onClick(idMonth)}>
      {nameMonth}
    </div>
  );
};

Month.propTypes = {};

Month.defaultProps = {};

export default Month;
