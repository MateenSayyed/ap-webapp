import styles from "./VideoGrid.module.css";

const VideoGrid = ({ items }) => {
  function convertDecimalHoursToHoursMinutes(decimalHours) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);

    return `${hours} hours and ${minutes} minutes`;
  }

  function capitalizeFirstLetter(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str; // Return the input if it's not a string or is an empty string
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <div>
            <div className={styles.bookmark}>भाग {item.series.order.seq}</div>
          </div>
          <div>
            <div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.subtitle}</div>
              <div className={styles.duration}>
                {" "}
                {convertDecimalHoursToHoursMinutes(item.courseHours)}
              </div>
              <div>
                <span className={styles.price}>
                  Contribution: ₹{item.amount}
                </span>
                <span className={styles.originalPrice}>
                  ₹{item.originalAmount}
                </span>
              </div>
              <span className={styles.lang}>
                {capitalizeFirstLetter(item.language)}
              </span>
            </div>
          </div>
          <div className={styles.ctaBtnCont}>
            <button className={styles.ctaBtn}>ADD TO CART</button>
            <span className={styles.ctaBtnSep}></span>
            <button className={styles.ctaBtn}>ENROLL</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
