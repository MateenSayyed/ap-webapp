import React from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://acharyaprashant.org/images/ic_videoseries.png"
          alt="content home"
          className={styles.logo}
        />

        <SearchBar />
        <button className={styles.loginBtn}>Login</button>
      </div>
    </>
  );
};

export default PageHeader;
