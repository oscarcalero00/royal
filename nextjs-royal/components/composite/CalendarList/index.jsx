import PropTypes from "prop-types";
import React from "react";
import { container, year, month } from "./CalendarList.module.scss";

import Calendar from "../Calendar";

const CalendarList = ({ listYears }) => {
  const getKey = (index) => `calendar_list_${index}`;

  return (
    <div className={container}>
      <div className={year}>{listYears.year}</div>
      {listYears &&
        listYears.map((item, index) =>
          item ? (
            <Calendar
              key={getKey(index)}
              yearCalendar={item.year}
              monthsCalendar={item.months}
              onSelect={(year, month) => {}}
              activeMonth={false}
              bridgeMonth={false}
            />
          ) : null
        )}
    </div>
  );
};

CalendarList.propTypes = {
  listYears: PropTypes.arrayOf(PropTypes.any),
};

CalendarList.defaultProps = {
  listYears: [],
};

export default CalendarList;
