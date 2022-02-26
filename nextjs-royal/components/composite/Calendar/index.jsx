import PropTypes from "prop-types";
import React from "react";
import { container, year, month } from "./Calendar.module.scss";

import Month from "../../simple/Month";

const Calendar = ({ yearCalendar, monthsCalendar, onSelect }) => {
  const getKey = (index) => `calendar_item_list_${index}`;

  return (
    <section className={container}>
      <div className={year}>{yearCalendar}</div>
      {monthsCalendar &&
        monthsCalendar.map((item, index) =>
          item ? (
            <Month
              className={month}
              key={getKey(index)}
              idMonth={item.id}
              nameMonth={item.name}
              activeMonth={item.active}
              bridgetMonth={item.bridget}
              onClick={(id) => {
                onSelect(yearCalendar, id);
              }}
            />
          ) : null
        )}
    </section>
  );
};

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
