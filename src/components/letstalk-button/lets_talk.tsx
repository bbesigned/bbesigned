"use client";

import React from "react";

import styles from "./letstalk.module.css"

interface ILetsTalkButtonProps {
    onClick?: () => void;
  }
  
  export const LetsTalkButton: React.FC<ILetsTalkButtonProps> = ({ onClick }) => {
    return (
     <div className={styles.letstalk__container}>
      <button
        onClick={onClick}
        className={styles.letsTalk}>
        Let&#39;s Talk
      </button>
      </div>
    );
  };