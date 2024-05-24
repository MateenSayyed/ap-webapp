import styles from "./MobileSearchBar.module.css";

const MobileSearchBar = ({ handleClick, inputRef }) => {
  return (
    <div className={styles.container2}>
      <div className={styles.backWrapper} onClick={handleClick}>
        <svg
          className={styles.backSVg}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
          viewBox="0 0 15 13"
        >
          <path
            fill-rule="evenodd"
            d="M7.244 12.249a.89.89 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.89.89 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212"
          ></path>
        </svg>
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" className={styles.input} ref={inputRef} />
      </div>
    </div>
  );
};

export default MobileSearchBar;
