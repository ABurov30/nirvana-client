import styles from './CodePage.module.scss'
import { Typography } from 'radio-app-uikit'
import React from 'react'
import CodeForm from '../../UI/Forms/AuthForms/CodeForm/CodeForm'
import { useAppSelector } from '../../shared/Redux/hooks'

export default function CodePage(): JSX.Element {
	const { theme } = useAppSelector(state => state.theme)
	return (
		<div className={styles.container}>
			<div
				className={`${styles.codeContainer} ${
					theme === 'light' ? styles.light : styles.dark
				}`}
			>
				<Typography text="Enter code" fontSize="20" weight="semibold" />
				<CodeForm />
			</div>
		</div>
	)
}
