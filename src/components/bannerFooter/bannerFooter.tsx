import React from "react";

import SupportButton from "../supportButton/supportButton";

import styles from "./bannerFooter.module.scss";

const BannerFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <SupportButton/>
      </div>
    </footer>
  );
};

export default BannerFooter;