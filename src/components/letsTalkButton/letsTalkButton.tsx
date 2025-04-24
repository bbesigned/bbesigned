import React from "react";

import styles from "./letsTalkButton.module.scss"

const LetsTalkButton = () => {
  return (
    <div className={styles.letsTalk__container}>
      <button
        className={styles.letsTalk}>
        Let&#39;s Talk
      </button>
    </div>
  );
};

export default LetsTalkButton;