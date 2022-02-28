import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Month.module.scss";

const typeclass = {
  first: styles["container--itemactivefirst"],
  last: styles["container--itemactivelast"],
  middle: styles["container--itemactivemiddle"],
};

const Month = ({ idMonth, nameMonth, onClick, type }) => {
  const getContainerClass = (type) =>
    `${styles["container"]} ${typeclass[type]}`;
  return (
    <div className={getContainerClass(type)} onClick={(e) => onClick(idMonth)}>
      <a>{nameMonth}</a>
    </div>
  );
};

Month.propTypes = {
  idMonth: PropTypes.number.isRequired,
  nameMonth: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
  type: PropTypes.string,
};

Month.defaultProps = {
  type: undefined,
};

export default Month;
