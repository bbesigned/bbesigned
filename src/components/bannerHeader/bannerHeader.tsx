import React from "react";

import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import styles from "./bannerHeader.module.css";

const BannerHeader: React.FC = () => {
  const mainText = "BESIGNED";

  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <BannerLogo mainText={mainText}/>
        <div className={styles.navigation}>
          <LetsTalkButton/>
          <MenuButton/>
        </div>
      </div>
    </header>
  );
};

export default BannerHeader;