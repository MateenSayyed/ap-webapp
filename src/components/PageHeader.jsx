import { useState, useRef } from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "./PageHeader.module.css";
import MobileSearchBar from "./MobileSearchBar.jsx";

const PageHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("CLicked");
    setIsClicked(!isClicked);

    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {isClicked ? (
            <MobileSearchBar
              isClicked={isClicked}
              handleClick={handleClick}
              inputRef={inputRef}
            />
          ) : (
            <>
              <img
                src="https://acharyaprashant.org/images/ic_videoseries.png"
                alt="content home"
                className={styles.logo}
              />

              <SearchBar />
              <div
                onClick={handleClick}
                className={`${styles.searchIcon1} ${
                  isClicked ? styles.clicked : ""
                }`}
              >
                <svg
                  className={styles.searchIconSvg}
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

              <button className={styles.loginBtn}>Login</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
