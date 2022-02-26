import PropTypes from "prop-types";
import React from "react";
import { container, toolbar } from "./SearchList.module.scss";

import Item from "../../simple/Item";
import ToolbarMobile from "../../simple/ToolbarMobile";

const SearchList = ({ listItems, onSelect, title, onBack, onApply }) => {
  const getKey = (index) => `search_list_${index}`;

  return (
    <div className={container}>
      <ToolbarMobile
        title={`Select ${title}`}
        onBack={() => {
          onBack();
        }}
        onApply={() => {
          onApply();
        }}
      />
      {listItems &&
        listItems.map((item, index) =>
          item ? (
            <Item
              key={getKey(index)}
              valueItem={item.value}
              textItem={item.text}
              activeItem={item.active}
              onClick={(id) => {
                onSelect(id);
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
