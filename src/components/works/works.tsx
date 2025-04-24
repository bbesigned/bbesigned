import React from "react";

import BannerHeader from "../bannerHeader/bannerHeader";

import WorksFooter from "../worksFooter/worksFooter";

import stylesPage from "../../app/page.module.scss";

import styles from "./works.module.scss";

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={stylesPage.container}>
        <BannerHeader smallLogo={true}/>
        <WorksFooter />
      </div>
    </div>
  )
}

export default Works;
