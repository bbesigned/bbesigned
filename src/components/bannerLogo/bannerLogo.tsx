import React from "react";

import VectorLetter from "../vectorLetter/VectorLetter";

import styles from "./bannerLogo.module.css";

import { IBannerLogoProps } from "./types";

const BannerLogo: React.FC<IBannerLogoProps> = ({ mainText }) => {
  return (
    <div className={styles.bannerLogo}>
      {mainText.split("").map((letter, letterIndex) => (
        <VectorLetter key={letterIndex} letter={letter} withShadow={false} sizeSet="logo" />
      ))}
    </div>
  );
};

export default BannerLogo;