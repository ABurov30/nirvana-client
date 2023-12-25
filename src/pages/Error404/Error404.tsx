import React from 'react'
import styles from './Error404.module.scss'
import { BlockButton, Typography } from 'radio-app-uikit'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
	const navigate = useNavigate()
	return (
		<div className={styles.error404}>
			<div className={styles.textContainer}>
				<Typography
					text={'404'}
					color="#f3f3f3"
					weight="semibold"
					fontSize="400"
					textAlign="center"
				/>
				<Typography
					text="Ooops! It`s looks like you`re out of space. But don`t worry, we`re here to guide you back."
					color="#f3f3f3"
					weight="regular"
					fontSize="20"
					textAlign="center"
				/>
				<BlockButton text="Home" onClick={() => navigate('/')} />
			</div>
		</div>
	)
}
