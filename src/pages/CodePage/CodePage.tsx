import styles from './CodePage.module.scss'
import { Typography } from 'nirvana-uikit'
import React from 'react'
import CodeForm from '../../UI/Forms/AuthForms/CodeForm/CodeForm'
import { useAppSelector } from '../../shared/Redux/hooks'
import { useTranslation } from 'react-i18next'

export default function CodePage(): JSX.Element {
	const { theme } = useAppSelector(state => state.app)
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div
				className={`${styles.codeContainer} ${
					theme === 'light' ? styles.light : styles.dark
				}`}
			>
				<Typography text={t('CodePage.enterCode')} weight="semibold" />
				<CodeForm />
			</div>
		</div>
	)
}
