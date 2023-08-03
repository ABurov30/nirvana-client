//@ts-ignore
import styles from './style.module.scss';
import React from 'react';

export default function LeftArrowButton() {
  return (
    <div className={styles.leftArrowButton}>
      <img src="/img/leftArrow.png" height={25} width={25} />
    </div>
  );
}
