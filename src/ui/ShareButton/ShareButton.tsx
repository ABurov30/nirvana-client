//@ts-ignore
import styles from './style.module.scss';
import React from 'react'

export default function ShareButton() {
  return (
    <div className={styles.shareButton}>
      <img src="/img/share.png" height={25} width={25} />
    </div>
  );
}
