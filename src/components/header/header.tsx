import React from "react";

import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <div className={styles["header__logo"]}>BESIGNED</div>

        <div className={styles["header__actions"]}>
          <button className={styles["header__button"]}>LET&#39;S TALK</button>
          <button className={styles["header__menu"]}>
            <span className={styles["header__menu-icon"]}>☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;