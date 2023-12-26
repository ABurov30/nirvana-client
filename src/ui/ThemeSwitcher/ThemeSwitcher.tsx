import React from 'react'
//@ts-ignore
import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher() {
	return (
		<label className={styles.switch}>
			<input className={styles.input} type={'checkbox'}></input>
			<span className={styles.slider}></span>
		</label>
	)
}
