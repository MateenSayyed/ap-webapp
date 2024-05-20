import React, { useEffect, useRef } from "react";
import styles from "./Menu.module.css";

const Menu = ({ isMenu, toggleMenu }) => {
  return (
    <>
      <div className={styles.closeBtn} onClick={() => toggleMenu()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          class="fill-current"
        >
          <path
            fill-rule="evenodd"
            d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414"
          ></path>
        </svg>
      </div>
      <div
        onClick={() => toggleMenu()}
        className={`${styles.shadow} ${isMenu ? styles.activeShadow : ""}`}
      ></div>
      <div className={`${styles.container} ${isMenu ? styles.active : ""}`}>
        <div className={styles.login}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
            class="fill-current"
          >
            <path d="M18.009 35.5q3.584 0 6.755-1.378a17.9 17.9 0 0 0 5.584-3.792 17.8 17.8 0 0 0 3.783-5.575q1.37-3.162 1.369-6.764 0-3.585-1.378-6.755a18 18 0 0 0-3.792-5.593 17.6 17.6 0 0 0-5.584-3.783Q21.576.5 17.991.5t-6.746 1.36a17.7 17.7 0 0 0-5.584 3.783 17.8 17.8 0 0 0-3.792 5.593Q.499 14.406.5 17.991q0 3.603 1.378 6.764A18 18 0 0 0 5.67 30.33a18 18 0 0 0 5.575 3.792q3.162 1.378 6.764 1.378m-.01-2q-3.224 0-6.039-1.201a15.6 15.6 0 0 1-4.945-3.33 15.4 15.4 0 0 1-3.323-4.943Q2.5 21.214 2.5 17.99q0-3.222 1.192-6.036a15.4 15.4 0 0 1 3.323-4.942 15.5 15.5 0 0 1 4.935-3.32Q14.755 2.5 17.98 2.5t6.04 1.192a15.4 15.4 0 0 1 4.945 3.32 15.6 15.6 0 0 1 3.333 4.942Q33.5 14.768 33.5 17.99q.02 3.223-1.183 6.036a15.7 15.7 0 0 1-3.323 4.942 15.4 15.4 0 0 1-4.945 3.33Q21.224 33.502 18 33.5m11.485-4.287-.055-.216q-.468-1.26-2.017-2.45-1.55-1.189-3.963-1.954t-5.458-.766q-3.027 0-5.431.766t-3.954 1.954q-1.549 1.19-2.054 2.432l-.054.234a15.3 15.3 0 0 0 3.63 2.55 20.7 20.7 0 0 0 4.143 1.602q2.08.55 3.72.55 1.657 0 3.729-.55a21 21 0 0 0 4.125-1.594 15.2 15.2 0 0 0 3.639-2.558M17.99 20.981q1.658.018 2.981-.828 1.324-.847 2.108-2.306.783-1.46.783-3.297 0-1.728-.783-3.16a6.3 6.3 0 0 0-2.117-2.298 5.35 5.35 0 0 0-2.972-.864q-1.621 0-2.954.864a6.3 6.3 0 0 0-2.117 2.297q-.783 1.433-.783 3.161 0 1.838.792 3.279.793 1.44 2.108 2.288 1.314.846 2.954.864"></path>
          </svg>
          <span>Login</span>
        </div>

        <div>
          <ul>
            <li>Gita Sangam</li>
            <li>Vedanta: Basics to Classics</li>
            <li>AP Books</li>
            <li>AP Articles</li>
            <li>Video Series</li>
            <li>AP Circles</li>
            <li>Invite For Talk</li>
            <li>Invite For an Interview</li>
            <li>Media and Public Interaction</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Donate</li>
          </ul>
        </div>
        <div>
          <h4>MORE</h4>
          <ul>
            <li>PrashantAdvait Foundation</li>
            <li>Ghar Ghar Upanishad</li>
            <li>About Acharya Prashant</li>
          </ul>
        </div>
        <div>
          <h4>EXPLORE CATEGORIES</h4>
          <ul>
            <li>Vedant - Upanishads</li>
            <li>Vedant - Bhagavad Gita</li>
            <li>Other Scriptures</li>
            <li>Saints and Masters</li>
            <li>Other streams</li>
            <li>Life Questions</li>

            <li>Technical Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
