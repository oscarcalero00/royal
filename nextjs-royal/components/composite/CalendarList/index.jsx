import PropTypes from "prop-types";
import React from "react";
import * as styles from "./CalendarList.module.scss";

import Calendar from "../Calendar";
import ToolbarMobile from "../../simple/ToolbarMobile";

const CalendarList = ({ listYears, title, onBack, onApply }) => {
  const getKey = (index) => `calendar_list_${index}`;

  return (
    <div className={styles["container"]}>
      <div className={styles["container--toolbar"]}>
        <ToolbarMobile
          title={`Select ${title}`}
          onBack={() => {
            onBack();
          }}
          onApply={() => {
            onApply();
          }}
        />
      </div>

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
  title: PropTypes.string,
  onBack: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

CalendarList.defaultProps = {
  listYears: [],
  title: "",
};

export default CalendarList;
