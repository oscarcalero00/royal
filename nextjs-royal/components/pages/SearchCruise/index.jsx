import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

import { container, filterContainer } from "./SearchCruise.module.scss";

import SearchMenu from "../../composite/SearchMenu";
import SearchList from "../../composite/SearchList";
import CalendarList from "../../composite/CalendarList";

import { listTo, listFrom, listDate } from "./Constants";

const SearchCruise = () => {
  const [tabs, setTabs] = useState({
    to: false,
    from: false,
    date: false,
  });

  const [filtersTo, setfiltersTo] = useState(listTo);
  const [orderTo, setOrderTo] = useState([]);

  const [filtersFrom, setfiltersFrom] = useState(listFrom);
  const [orderFrom, setOrderFrom] = useState([]);

  return (
    <div className={container}>
      <SearchMenu
        tabs={tabs}
        filtersTo={orderTo.map((idorder) =>
          filtersTo
            .filter((item) => item.value == idorder)
            .map((res) => res.text)
        )}
        filtersFrom={orderFrom.map((idorder) =>
          filtersFrom
            .filter((item) => item.value == idorder)
            .map((res) => res.text)
        )}
        onSelect={(type) => {
          const newTabs = {
            ...tabs,
          };
          Object.keys(newTabs).map((val) =>
            val !== type ? (newTabs[val] = false) : (newTabs[val] = true)
          );
          setTabs(newTabs);
        }}
      />
      <div className={filterContainer}>
        {tabs.to && (
          <SearchList
            title={"Departure Port"}
            listItems={filtersTo}
            onSelect={(id) => {
              const newList = [...filtersTo];
              const previousValue = newList.find((item) => item.value == id);

              if ([...orderTo].includes(id))
                setOrderTo([...orderTo].filter((value) => value != id));
              else setOrderTo([...orderTo, id]);

              previousValue.active = !previousValue.active;
              setfiltersTo(newList);
            }}
            onBack={() => {
              setTabs({
                ...tabs,
                to: false,
              });
            }}
            onApply={() => {
              setTabs({
                ...tabs,
                to: false,
              });
            }}
          />
        )}
        {tabs.from && (
          <SearchList
            title={"Destination"}
            listItems={filtersFrom}
            onSelect={(id) => {
              const newList = [...filtersFrom];
              const previousValue = newList.find((item) => item.value == id);

              if ([...orderFrom].includes(id))
                setOrderFrom([...orderFrom].filter((value) => value != id));
              else setOrderFrom([...orderFrom, id]);

              previousValue.active = !previousValue.active;
              setfiltersFrom(newList);
            }}
            onBack={() => {
              setTabs({
                ...tabs,
                from: false,
              });
            }}
            onApply={() => {
              setTabs({
                ...tabs,
                from: false,
              });
            }}
          />
        )}
        {tabs.date && (
          <CalendarList
            listYears={listDate}
            title={"Travel Dates"}
            onBack={() => {
              setTabs({
                ...tabs,
                date: false,
              });
            }}
            onApply={() => {
              setTabs({
                ...tabs,
                date: false,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

SearchCruise.propTypes = {};

SearchCruise.defaultProps = {};

export default SearchCruise;
