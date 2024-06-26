import styles from "./Header.module.css";

import { useState } from "react";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import MobileNav from "./MobileNav";

function Header() {
  const dropdownItemsLive = ["Gita Samagam", "Vedanta: Basics to Classics"];
  const dropdownItemsInvite = ["For a talk", "For an interview"];
  const dropdownItemsLang = ["Hindi", "English"];

  const [isMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.leftnav}>
            <div>
              <a href="#">
                <img
                  className={styles.sitelogo}
                  src="https://acharyaprashant.org/images/ic_favicon.png"
                  alt="Acharya Prashant"
                />
              </a>
            </div>

            <div className={styles.bigLinks}>
              <a href="#">Home</a>
            </div>
            <div className={styles.bigLinks}>
              <a href="#">
                <Dropdown
                  title="Live Sessions"
                  items={dropdownItemsLive}
                  menuWidth="22rem"
                  menuPosition="left"
                  color="red"
                />
              </a>
            </div>

            <div className={`${styles.bigLinks} ${styles.activeLink}`}>
              <a href="#">Video Series</a>
            </div>

            <div className={styles.bigLinks}>
              <a href="#">AP Books </a>
            </div>

            <div className={styles.bigLinks}>
              <a href="#">AP Articles</a>
            </div>

            <div className={`${styles.dropDownHigh} ${styles.bigLinks}`}>
              <a href="#">
                <Dropdown
                  title="Invite"
                  items={dropdownItemsInvite}
                  menuWidth="14rem"
                  menuPosition="left"
                  color="red"
                />
              </a>
            </div>
            <div className={`${styles.media} ${styles.bigLinks}`}>
              <a href="#">In Media</a>
            </div>
            <div className={`${styles.media} ${styles.bigLinks}`}>
              <a href="#">Careers</a>
            </div>
            <div className={`${styles.media} ${styles.bigLinks}`}>
              <a href="#">Donate</a>
            </div>
          </div>
          <div className={styles.rightnav}>
            <div>
              <a href="#">
                <Dropdown
                  border="true"
                  title="EN"
                  items={dropdownItemsLang}
                  menuWidth="8rem"
                  menuPosition="right"
                  color="red"
                />
              </a>
            </div>

            <div className={styles.phone}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="h-5 w-5 fill-current"
              >
                <path d="M11.895 16q1.062 0 1.817-.313.754-.314 1.388-1.017.052-.05.094-.103l.086-.103q.369-.403.544-.81a2 2 0 0 0 .176-.785q0-.447-.257-.862-.257-.417-.806-.785l-2.382-1.665a2.05 2.05 0 0 0-1.17-.39q-.612-.005-1.118.502l-.617.609q-.146.155-.287.167a.5.5 0 0 1-.305-.09 8 8 0 0 1-.544-.416 19 19 0 0 1-1.332-1.205q-.31-.3-.596-.614a12 12 0 0 1-.527-.613q-.24-.3-.394-.558a.42.42 0 0 1-.095-.296.5.5 0 0 1 .163-.287l.609-.618q.514-.514.51-1.128a2 2 0 0 0-.399-1.162L4.782 1.047Q4.413.515 3.998.262A1.7 1.7 0 0 0 3.137 0q-.789-.017-1.594.704a1 1 0 0 0-.108.09 1 1 0 0 1-.098.081Q.634 1.52.317 2.278 0 3.038 0 4.118q0 1.176.458 2.484.46 1.308 1.367 2.664a18 18 0 0 0 2.237 2.685 18.6 18.6 0 0 0 2.674 2.217q1.345.906 2.657 1.369 1.311.463 2.502.463m0-1.295q-1.037.008-2.211-.455a11.6 11.6 0 0 1-2.365-1.296 17 17 0 0 1-2.28-1.921 17 17 0 0 1-1.941-2.3A12 12 0 0 1 1.765 6.32q-.48-1.197-.462-2.235.008-.66.244-1.218a2.64 2.64 0 0 1 .788-1.038l.082-.069q.172-.146.355-.227a.9.9 0 0 1 .365-.082q.376 0 .6.343l1.55 2.317a.66.66 0 0 1 .13.411q-.01.214-.207.412l-.685.678q-.437.438-.437.922t.3.905q.334.465.878 1.081.544.617 1.033 1.107.342.335.754.716.412.382.814.725.403.344.703.566.42.3.904.3t.921-.445l.677-.678q.197-.206.416-.21a.7.7 0 0 1 .416.133L14.2 12.26q.18.12.257.274a.74.74 0 0 1 .078.335q0 .351-.309.72a2 2 0 0 1-.137.155q-.403.471-.968.708a3.4 3.4 0 0 1-1.226.253"></path>
              </svg>
            </div>

            <div className={styles.ham} onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                class="fill-current"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.826"
                  d="M1 1.609h20M1 8h20M1 14.391h20"
                ></path>
              </svg>
              <div>Menu</div>
            </div>

            {isMenu && <MobileNav isMenu={isMenu} toggleMenu={toggleMenu} />}
            {isMenu && <Menu isMenu={isMenu} toggleMenu={toggleMenu} />}
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerwrapper}>
          <div className={styles.bannerleftnav}>
            <div className={styles.redball}></div> Acharya Prashant is dedicated
            to building a brighter future for you
          </div>
          <div className={`${styles.bannerrightnav} ${styles.navBtn} `}>
            <a href="#">Extend your hand</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
