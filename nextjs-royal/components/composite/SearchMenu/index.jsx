import PropTypes from "prop-types";
import React from "react";
import { container, titleMobile } from "./SearchMenu.module.scss";
import * as styles from "./SearchMenu.module.scss";

import Tab from "../../simple/Tab";
import Button from "../../simple/Button";

const SearchMenu = ({
  filtersTo,
  filtersFrom,
  filtersDate,
  tabs,
  onSelect,
}) => {
  return (
    <nav
      className={styles['container']}
      itemType="http://schema.org/SiteNavigationElement"
      role="navigation"
    >
      <span className={styles['container--titleMobile']}>FIND A CRUISE</span>
      <Tab
        title={"CRUISIGN TO"}
        defaultText={"Cruising to Any Destination"}
        type={"dropbox"}
        activeTab={tabs.to}
        filters={filtersTo}
        onClick={() => onSelect("to")}
        aria-label={'CRUISIGN TO'}
        role='button'
      />
      <Tab
        title={"DEPARTING FROM"}
        defaultText={"Departing from Any Port"}
        type={"dropbox"}
        activeTab={tabs.from}
        filters={filtersFrom}
        onClick={() => onSelect("from")}
        aria-label={'DEPARTING FROM'}
        role='button'
      />
      <Tab
        title={"LEAVING"}
        defaultText={"Departing Any Date"}
        type={"calendar"}
        activeTab={tabs.date}
        filters={[]}
        onClick={() => onSelect("date")}
        aria-label={'LEAVING DATE'}
        role='button'
      />
      <Button textButton="SEARCH CRUISE" />
    </nav>
  );
};

SearchMenu.propTypes = {
  filtersTo: PropTypes.arrayOf(PropTypes.any),
};

SearchMenu.defaultProps = {};

export default SearchMenu;
