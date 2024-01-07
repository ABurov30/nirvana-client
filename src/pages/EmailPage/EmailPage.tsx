import styles from './EmailPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React from 'react'
import EmailForm from '../../UI/Forms/AuthForms/EmailForm/EmailForm'
import { useAppSelector } from '../../shared/Redux/hooks'
import { useTranslation } from 'react-i18next'

export default function EmailPage(): JSX.Element {
	const { theme } = useAppSelector(state => state.app)
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div
				className={`${styles.emailContainer} ${
					theme === 'light' ? '' : styles.dark
				}`}
			>
				<div className={styles.titleContainer}>
					<Typography
						text={t('EmailPage.enterEmail')}
						weight="semibold"
					/>
				</div>
				<div className={styles.formContainer}>
					<EmailForm />
				</div>
			</div>
		</div>
	)
}
