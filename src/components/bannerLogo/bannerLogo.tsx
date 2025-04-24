import React from "react";

import Image from "next/image";

import { IBannerLogo } from "../../types/common/ComponentsProps";

import styles from "./bannerLogo.module.scss";

const BannerLogo = ({ smallLogo }: IBannerLogo) => {
  return (
    <div className={styles.bannerLogo}>
      <Image
        src={smallLogo ? "/logo_small(light).webp" : "/logo.webp"}
        alt="Logo"
        width={715}
        height={85}
        priority
        className={`${smallLogo ? styles.bannerLogo__smallLogoImage : styles.bannerLogo__logoImage}`}
      />
    </div>
  );
};

export default BannerLogo;