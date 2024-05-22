import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import SearchDropdown from "./SearchDropdown";
import axios from "axios";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.dropdownwrap}>
        {/* <Dropdown
          title="All"
          items={[]}
          menuWidth="15rem"
          menuPosition="left"
          color="white"
        /> */}
        <SearchDropdown />
      </div>
      <div className={styles.inputwrapper}>
        <input
          className={styles.input}
          placeholder="Search for video series"
        ></input>
      </div>
      <div className={styles.searchicon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
        >
          <path
            fill-rule="evenodd"
            d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
