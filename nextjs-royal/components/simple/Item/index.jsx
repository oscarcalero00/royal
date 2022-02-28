import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Item.module.scss";

const Item = ({ valueItem, textItem, activeItem, onClick }) => {
  const getContainerClass = (active) =>
    !active
      ? `${styles["container"]} ${styles["container--item-inactive"]}`
      : `${styles["container"]} ${styles["container--item-active"]}`;
  return (
    <span
      className={getContainerClass(activeItem)}
      onClick={(e) => onClick(valueItem)}
    >
      {textItem}
    </span>
  );
};

Item.propTypes = {
  valueItem: PropTypes.string.isRequired,
  textItem: PropTypes.string.isRequired,
  activeItem: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Item.defaultProps = {};

export default Item;
