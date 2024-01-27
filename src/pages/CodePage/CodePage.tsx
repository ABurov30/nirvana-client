import React from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from 'nirvana-uikit'

import { useAppSelector } from '../../shared/Redux/hooks'

import CodeForm from '../../UI/Forms/AuthForms/CodeForm/CodeForm'

import styles from './CodePage.module.scss'

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
