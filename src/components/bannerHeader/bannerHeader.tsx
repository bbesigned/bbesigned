import React from "react";

import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import { IBannerLogo } from "../../types/common/ComponentsProps";

import styles from "./bannerHeader.module.scss";

const BannerHeader = ({ smallLogo }: IBannerLogo) => {
  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <BannerLogo smallLogo={smallLogo}/>
        <div className={styles.header__navigation}>
          <LetsTalkButton/>
          <MenuButton/>
        </div>
      </div>
    </header>
  );
};

export default BannerHeader;