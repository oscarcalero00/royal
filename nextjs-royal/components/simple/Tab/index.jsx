import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Tab.module.scss";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import DateRange from "@material-ui/icons/DateRange";

const conftype = {
  dropbox: {
    iconActive: <ExpandLess style={{ color: "#4577dc" }} />,
    iconInActive: <ExpandMore style={{ color: "#4577dc" }} />,
  },
  calendar: {
    iconActive: <DateRange style={{ color: "#4577dc" }} />,
    iconInActive: <DateRange style={{ color: "#4577dc" }} />,
  },
};

const Tab = ({ title, defaultText, type, activeTab, filters, onClick }) => {
  const getContainerClass = (active) =>
    !active
      ? `${styles["container"]} ${styles["container--tab-inactive"]}`
      : `${styles["container"]} ${styles["container--tab-active"]}`;
  const getIcon = (type, active) =>
    active ? conftype[type].iconActive : conftype[type].iconInActive;

  const [mainFilter] = filters;
  const countFilters = filters.length - 1;
  const labelSubTitle = mainFilter ? mainFilter : defaultText;
  return (
    <div
      className={getContainerClass(activeTab)}
      onClick={(e) => onClick()}
      role="button"
    >
      <div>
        <h3>{title}</h3>
        <p>{labelSubTitle}</p>
      </div>
      {countFilters > 0 && (
        <div
          className={styles["container__numberFilter"]}
        >{`+${countFilters}`}</div>
      )}
      {countFilters < 0 && getIcon(type, activeTab)}
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  activeTab: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.any),
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
