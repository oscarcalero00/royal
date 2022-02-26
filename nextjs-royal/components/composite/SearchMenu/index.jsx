import PropTypes from "prop-types";
import React from "react";
import { container } from "./SearchMenu.module.scss";

import Tab from "../../simple/Tab";
import Button from "../../simple/Button";

const SearchMenu = ({filtersTo,filtersFrom,filtersDate,tabs,onSelect}) => {
   
  return (
    <div className={container}>
      <Tab
        title={"CRUISIGN TO"}
        defaultText={"Cruising to Any Destination"}
        type={"dropbox"}
        activeTab={tabs.to}
        filters={filtersTo}
        onClick={()=>onSelect('to')}
      />
      <Tab
        title={"DEPARTING FROM"}
        defaultText={"Departing from Any Port"}
        type={"dropbox"}
        activeTab={tabs.from}
        filters={filtersFrom}
        onClick={()=>onSelect('from')}
      />
      <Tab
        title={"LEAVING"}
        defaultText={"Departing Any Date"}
        type={"calendar"}
        activeTab={tabs.date}
        filters={[]}
        onClick={()=>onSelect('date')}
      />
      <Button textButton="SEARCH CRUISE" />
    </div>
  );
};

SearchMenu.propTypes = {
    filtersTo: PropTypes.arrayOf(PropTypes.any)
};

SearchMenu.defaultProps = {};

export default SearchMenu;
