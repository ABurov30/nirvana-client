import React, { useState } from 'react'
//@ts-ignore
import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher() {
	const [isLightTheme, setIsLightTheme] = useState(false)
	return (
		<label className={styles.switch}>
			<input
				className={styles.input}
				type={'checkbox'}
				checked={isLightTheme}
				onChange={() => setIsLightTheme(prev => !prev)}
			></input>
			<span className={styles.slider}></span>
		</label>
	)
}
