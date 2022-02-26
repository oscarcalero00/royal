import PropTypes from "prop-types";
import React from "react";
import { container } from "./SearchMenu.module.scss";

import Tab from "../../simple/Tab";
import Button from "../../simple/Button";

const SearchMenu = ({filtersTo}) => {
  const filterCruising = ["Bahamas"];
    
  return (
    <div className={container}>
      <Tab
        title={"CRUISIGN TO"}
        defaultText={"Cruising to Any Destination"}
        type={"dropbox"}
        activeTab={true}
        filters={filtersTo}
      />
      <Tab
        title={"DEPARTING FROM"}
        defaultText={"Departing from Any Port"}
        type={"dropbox"}
        activeTab={false}
        filters={[]}
      />
      <Tab
        title={"LEAVING"}
        defaultText={"Departing Any Date"}
        type={"calendar"}
        activeTab={false}
        filters={[]}
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
