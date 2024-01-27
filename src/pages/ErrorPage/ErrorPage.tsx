import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BlockButton, Typography } from 'nirvana-uikit'

import styles from './ErrorPage.module.scss'

function ErrorPage() {
	const [isHover, setIsHover] = useState(false)
	const { t } = useTranslation()
	return (
		<div className={styles.errorPage}>
			<div className={styles.textContainer}>
				{isHover ? (
					<Typography text="🐵" fontSize="10em" />
				) : (
					<Typography text="🙊" fontSize="10em" />
				)}
				<Typography
					text={t('ErrorPage.errorMessage')}
					color="#f3f3f3"
					weight="regular"
					fontSize="1.2em"
					textAlign="center"
				/>
				<BlockButton
					text={t('ErrorPage.reload')}
					onClick={() => location.reload()}
					onMouseOver={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				/>
			</div>
		</div>
	)
}

export default ErrorPage
