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
          height="2.833em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff8f0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollTopButton;