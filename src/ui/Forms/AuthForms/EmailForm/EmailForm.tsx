import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { onSubmit } from './onSubmit'

import { useAppDispatch } from '../../../../shared/Redux/hooks'

import styles from './EmailForm.module.scss'

function EmailForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<form
			className={styles.form}
			onSubmit={e => onSubmit(e, dispatch, navigate)}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 2 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.email')}
							name={'email'}
						/>
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

export default EmailForm
