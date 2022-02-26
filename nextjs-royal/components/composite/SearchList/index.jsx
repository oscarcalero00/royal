import PropTypes from "prop-types";
import React from "react";
import { container } from "./SearchList.module.scss";

import Item from "../../simple/Item";

const SearchList = ({ listItems , onSelect }) => {
  const getKey = (index) => `search_list_${index}`;
  
  return (
    <div className={container}>
      {listItems &&
        listItems.map((item, index) =>
          item ? (
            <Item
              key={getKey(index)}
              valueItem={item.value}
              textItem={item.text}
              activeItem={item.active}
              onClick={(id) => {
               
                onSelect(id)
              }}
            />
          ) : null
        )}
    </div>
  );
};

SearchList.propTypes = {};

SearchList.defaultProps = {};

export default SearchList;
