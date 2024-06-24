import { type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

import { onSubmit } from './onSubmit'

import { useAppDispatch } from 'shared/Redux/hooks'

import styles from './EmailForm.module.scss'
import { t } from 'i18next'

function EmailForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	return (
		<form
			className={styles.form}
			onSubmit={async e => {
				await onSubmit(e, dispatch, navigate)
			}}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 2 } as CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 2 } as CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.email')}
							name={'email'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 1 } as CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 1 } as CSSProperties}
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
