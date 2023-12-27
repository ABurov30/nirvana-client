import styles from './ResetPasswordPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useState } from 'react'
import ResetPasswordForm from '../../UI/Forms/AuthForms/ResetPasswordForm/ResetPasswordForm'

export default function ResetPasswordPage(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false)
	return (
		<div className={styles.container}>
			<div className={styles.resetPasswordContainer}>
				<div className={styles.titleContainer}>
					{isVisible ? (
						<Typography text="🙉" fontSize="100" />
					) : (
						<Typography text="🙈" fontSize="100" />
					)}
					<Typography
						text="Reset Password"
						fontSize="32"
						weight="semibold"
					/>
				</div>
				<div className={styles.formContainer}>
					<ResetPasswordForm
						isVisible={isVisible}
						setIsVisible={setIsVisible}
					/>
				</div>
			</div>
		</div>
	)
}
