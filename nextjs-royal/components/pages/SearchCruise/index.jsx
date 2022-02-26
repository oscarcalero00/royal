import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

import { container } from "./SearchCruise.module.scss";

import SearchMenu from "../../composite/SearchMenu";
import SearchList from "../../composite/SearchList";

import { listTo } from "./Constants";

const SearchCruise = () => {
  // const filterCruising = ["Bahamas"];

  const [filtersTo, setfiltersTo] = useState(listTo);

  return (
    <div className={container}>
      <SearchMenu
        filtersTo={filtersTo
          .filter((item) => item.active == true)
          .map((val) => val.text)}
      />
      <SearchList
        listItems={filtersTo}
        onSelect={(id) => {
          const newList = [...filtersTo];
          const previousValue = newList.find((item) => item.value == id);
          previousValue.active = !previousValue.active;
          setfiltersTo(newList);
        }}
      />
    </div>
  );
};

SearchCruise.propTypes = {};

SearchCruise.defaultProps = {};

export default SearchCruise;
