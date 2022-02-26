import PropTypes from "prop-types";
import React from "react";
import {
  container,
  itemactive,
  iteminactive,
} from "./Item.module.scss";

const Item = ({ valueItem, textItem, activeItem, onClick }) => {
    
  const getContainerClass = (active) =>
    !active ? `${container} ${iteminactive}` : `${container} ${itemactive}`;
  return (
    <div className={getContainerClass(activeItem)} onClick={(e) => onClick(valueItem)}>
      {textItem}
    </div>
  );
};

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
