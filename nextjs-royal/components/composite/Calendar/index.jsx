import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Calendar.module.scss";

import Month from "../../simple/Month";

const Calendar = ({ yearCalendar, monthsCalendar, onSelect }) => {
  const getKey = (index) => `calendar_item_list_${index}`;

  return (
    <section className={styles["container"]}>
      <div className={styles["container--year"]}>{yearCalendar}</div>
      {monthsCalendar &&
        monthsCalendar.map((item, index) =>
          item ? (
            <Month
              key={getKey(index)}
              idMonth={item.id}
              nameMonth={item.name}
              activeMonth={item.active}
              bridgetMonth={item.bridget}
              type={item.type}
              onClick={(id) => {
                onSelect(yearCalendar, id);
              }}
            />
          ) : null
        )}
    </section>
  );
};

Calendar.propTypes = {
  yearCalendar: PropTypes.number.isRequired,
  monthsCalendar: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
};

Calendar.defaultProps = {};

export default Calendar;
