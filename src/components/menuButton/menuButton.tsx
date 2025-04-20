"use client";

import React from "react";

import styles from "./menuButton.module.css";

interface IMenuButtonProps {
  onClick?: () => void;
}

export const MenuButton: React.FC<IMenuButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.burger__container}>
    <button onClick={onClick} className={styles.menuButton}>
      <div className={styles.hamburger}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
    </button>
    </div>
  );
}

export default MenuButton;