import styles from './CodePage.module.scss'
import { Typography } from 'radio-app-uikit'
import React from 'react'
import CodeForm from '../../UI/Forms/AuthForms/CodeForm/CodeForm'

export default function CodePage(): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.codeContainer}>
				<Typography text="Enter code" fontSize="20" weight="semibold" />
				<CodeForm />
			</div>
		</div>
	)
}
