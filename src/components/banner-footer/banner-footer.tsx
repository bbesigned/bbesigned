import React from "react";

import styles from "./banner-footer.module.css";

const BannerFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__actions"]}>
          <button className={styles["footer__button"]}>Chat Button</button>
        </div>
      </div>
    </footer>
  );
};

export default BannerFooter;