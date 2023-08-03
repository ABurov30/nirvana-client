
//@ts-ignore
import styles from './style.module.scss';
import React from 'react'

export default function LikeButton() {
  return (
    <div className={styles.likeButton}>
      <img src="/img/heart.png" height={25} width={25} />
    </div>
  );
}
