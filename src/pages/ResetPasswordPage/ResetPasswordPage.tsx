//@ts-ignore
import styles from './ResetPasswordPage.module.scss'
import { Typography } from 'nirvana-uikit'
import React, { useState } from 'react'
import ResetPasswordForm from '../../UI/Forms/AuthForms/ResetPasswordForm/ResetPasswordForm'
import { useTranslation } from 'react-i18next'

export default function ResetPasswordPage(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false)
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.resetPasswordContainer}>
				<div className={styles.titleContainer}>
					{isVisible ? (
						<Typography text="🙉" fontSize="5em" />
					) : (
						<Typography text="🙈" fontSize="5em" />
					)}
					<Typography
						text={t('ResetPasswordPage.resetPassword')}
						fontSize="2em"
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
