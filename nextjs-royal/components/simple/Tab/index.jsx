import PropTypes from "prop-types";
import React from "react";
import {
  container,
  tabactive,
  tabinactive,
  numberFilter,
} from "./Tab.module.scss";
// import {defaultValues} from './Constants'
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
    !active ? `${container} ${tabinactive}` : `${container} ${tabactive}`;
  const getIcon = (type, active) =>
    active ? conftype[type].iconActive : conftype[type].iconInActive;

  const [mainFilter] = filters;
  const countFilters = filters.length - 1;
  const labelSubTitle = mainFilter ? mainFilter : defaultText;

  return (
    <div className={getContainerClass(activeTab)} onClick={(e) => onClick()}>
      <div>
        <h3>{title}</h3>
        <p>{labelSubTitle}</p>
      </div>
      {countFilters > 0 && (
        <div className={numberFilter}>{`+${countFilters}`}</div>
      )}
      {countFilters < 0 && getIcon(type, activeTab)}
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.any),
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
