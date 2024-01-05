import { useNavigate, useParams } from 'react-router-dom'
import styles from './ResetPasswordForm.module.scss'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {
	onSubmit,
	onSubmitNewPassword
} from '../../../../shared/utils/onSubmitNewPassword'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { ResetPasswordFormProps } from './types'

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
			onSubmit={e => onSubmitNewPassword(e, dispatch, userId, navigate)}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={'New password'}
							name={'password'}
							type={isVisible ? 'text' : 'password'}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => setIsVisible(!isVisible)}
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
							placeholder={'Repeat new password'}
							name={'repeatPassword'}
							type={isVisible ? 'text' : 'password'}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => setIsVisible(!isVisible)}
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
						{'Reset password'}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default ResetPasswordForm
