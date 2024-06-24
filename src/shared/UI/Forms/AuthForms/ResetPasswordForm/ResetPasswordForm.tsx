import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility'

import { type ResetPasswordFormProps } from './types'

import { useAppDispatch } from 'shared/Redux/hooks'
import { onSubmitNewPassword } from 'shared/utils/onSubmitNewPassword'

import styles from './ResetPasswordForm.module.scss'
import { t } from 'i18next'

function ResetPasswordForm({
	isVisible,
	setIsVisible
}: ResetPasswordFormProps) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { userId } = useParams()

	return (
		<form
			className={styles.form}
			onSubmit={async e => {
				await onSubmitNewPassword({
					e,
					dispatch,
					navigate,
					userId: userId as string
				})
			}}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('ResetPasswordPage.newPassword')}
							name={'password'}
							type={isVisible ? 'text' : 'password'}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => {
								setIsVisible(!isVisible)
							}}
						>
							<VisibilityIcon style={{ color: '#5EE9BF' }} />
						</div>
					</li>
				</div>
				<div
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 2 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.repeatPassword')}
							name={'repeatPassword'}
							type={isVisible ? 'text' : 'password'}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => {
								setIsVisible(!isVisible)
							}}
						>
							<VisibilityIcon style={{ color: '#5EE9BF' }} />
						</div>
					</li>
				</div>
				<div
					style={{ '--i': 1 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'submit'}
						aria-label="Submit"
					>
						{t('ResetPasswordPage.resetPassword')}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default ResetPasswordForm
