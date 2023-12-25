import React, { useRef, useState } from 'react'
import styles from './ErrorPage.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { BlockButton, Typography } from 'radio-app-uikit'

function ErrorPage() {
	const [isHover, setIsHover] = useState(false)
	return (
		<div className={styles.errorPage}>
			<div className={styles.textContainer}>
				{isHover ? (
					<Typography text="🐵" fontSize="200" />
				) : (
					<Typography text="🙊" fontSize="200" />
				)}
				<Typography
					text="Ooops! Something went wrong."
					color="#f3f3f3"
					weight="regular"
					fontSize="20"
					textAlign="center"
				/>
				<BlockButton
					text="Reload"
					onClick={() => location.reload()}
					onMouseOver={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				/>
			</div>
		</div>
	)
}

export default ErrorPage
