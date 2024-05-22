import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, items, menuWidth, menuPosition, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(`.${styles.dropdown}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuStyle = {
    width: menuWidth || "25rem",
    [menuPosition]: "0",
  };

  return (
    <div
      className={`${styles.dropdown} ${
        color === "red" ? styles.red : styles.white
      }`}
    >
      <button onClick={toggleDropdown} className={styles.dropdownToggle}>
        {title}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            className="fill-current"
          >
            <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
          </svg>
        </span>
      </button>

      <div
        className={`${styles.dropdownMenu} ${
          isOpen ? styles.dropdownMenuOpen : ""
        }`}
        style={menuStyle}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.dropdownItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
