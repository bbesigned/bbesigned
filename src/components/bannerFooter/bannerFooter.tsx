import React from "react";

import SupportButton from "../supportButton/supportButton";

import styles from "./bannerFooter.module.css";

const BannerFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <SupportButton/>
      </div>
    </footer>
  );
};

export default BannerFooter;