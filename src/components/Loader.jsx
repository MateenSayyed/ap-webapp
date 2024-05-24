import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.loaderCont}>
        <div className={styles.loader}></div>
        <div>Loading...</div>
      </div>
    </>
  );
};

export default Loader;
