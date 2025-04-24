import React from "react";

import Image from "next/image";

import styles from "./bannerLogo.module.scss";

const BannerLogo = () => {
  return (
    <div className={styles.bannerLogo}>
      <Image
        src="/logo.webp"
        alt="Logo"
        width={715}
        height={85}
        priority
        className={styles.bannerLogo__logoImage}
      />
    </div>
  );
};

export default BannerLogo;