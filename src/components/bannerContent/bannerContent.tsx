import React from "react";

import VectorLetter from "../vectorLetter/VectorLetter";

import { IBannerContent } from "../../types/common/ComponentsProps";

import styles from "./bannerContent.module.scss";

const BannerContent = ({ leftText, rightText }: IBannerContent) => {
  return (
    <div className={styles["banner__container"]}>
      <div className={styles["banner__left-block"]}>
        {leftText.map((text, index) => (
          <p key={index} className={styles["banner__left-block__left-text"]}>
            {text}
          </p>
        ))}
      </div>
      <div className={styles["banner__right-block"]}>
        {rightText.map((text, index) => (
          <div key={index} className={styles["banner__right-block__right-text"]}>
            {text.split("").map((letter, letterIndex) => (
              <VectorLetter key={letterIndex} letter={letter} withShadow={index < 2} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerContent;