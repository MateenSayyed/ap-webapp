import React, { useState, useEffect } from "react";
import styles from "./SearchDropdown.module.css";

const SearchDropdown = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(
          "https://api.acharyaprashant.org/v2/legacy/courses/tags"
        );
        const data = await response.json();

        const parents = data[0];
        const children = data[1];

        const structuredOptions = parents.map((parent) => ({
          ...parent,
          children: children.filter((child) => child.parent === parent.tagId),
        }));

        setOptions(structuredOptions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching options:", error);
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (option) => {
    setSelectedOption(option.name.english);
    setHoveredOption(null); // Hide submenu on click
  };

  const handleMouseEnter = (option) => {
    setHoveredOption(option);
  };

  const handleMouseLeave = () => {
    // Keep the submenu open if the mouse is still over the parent option or the submenu itself
    // Otherwise, hide the submenu
    if (!isMouseOverOption() && !isMouseOverSubmenu()) {
      setHoveredOption(null);
    }
  };

  const handleClick = () => {
    // setSelectedOption("");
    setIsClicked(!isClicked);
  };

  // Check if the mouse is over any of the parent options
  const isMouseOverOption = () => {
    return options.some(
      (option) => hoveredOption && option.tagId === hoveredOption.tagId
    );
  };

  // Check if the mouse is over the submenu
  const isMouseOverSubmenu = () => {
    return hoveredOption && hoveredOption.children.length > 0;
  };

  if (loading) {
    return <div className={styles.dropdownContainer}>Loading...</div>;
  }

  return (
    <>
      {isClicked && (
        <div className={styles.modalOverlay} onClick={handleClick}></div>
      )}
      <div className={`${styles.selected}`} onClick={handleClick}>
        {selectedOption || "All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          className="fill-current"
        >
          <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
        </svg>
      </div>
      <div
        className={`${styles.dropdownContainer} ${
          isClicked ? styles.show : ""
        }`}
      >
        <div className={styles.dropdown}>
          <div className={styles.select}>
            <div
              className={`${styles.option} ${styles.menu} `}
              onClick={() => setIsClicked(!isClicked)}
            >
              All
            </div>
            {options.map((option) => (
              <div
                key={option.tagId}
                className={`${styles.option} ${styles.menu}`}
                onMouseEnter={() => handleMouseEnter(option)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  handleChange(option);
                  setIsClicked(!isClicked);
                }}
              >
                {option.name.english}
              </div>
            ))}
          </div>
        </div>
      </div>
      {hoveredOption && hoveredOption.children.length > 0 && (
        <div
          className={styles.submenu}
          onMouseEnter={() => handleMouseEnter(hoveredOption)}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            {hoveredOption.children.map((child) => (
              <li
                className={`${styles.option} ${styles.menu} `}
                key={child.tagId}
                onClick={() => {
                  handleChange(child);
                  setIsClicked(!isClicked);
                }}
              >
                {child.name.english}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchDropdown;
