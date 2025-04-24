import React from "react";

import styles from "./scrollTopButton.module.scss";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scrollTopButton__container}>
      <button className={styles.scrollTopButton} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.833em"
          height="4em"
          viewBox="0 0 20 24"
          fill="none"
          stroke="#fff8f0"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 19V5" />
          <path d="M5 12l5-7 5 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollTopButton;