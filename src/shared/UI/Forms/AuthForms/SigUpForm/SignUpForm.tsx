import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { onSubmit } from './onSubmit'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { type SignUpFormProps } from './types'

import { useAppDispatch } from 'shared/Redux/hooks'

import styles from './SignUpForm.module.scss'

function SignUpForm({ isVisible, setIsVisible }: SignUpFormProps) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	return (
		<form
			className={styles.form}
			onSubmit={async e => {
				await onSubmit(e, dispatch, navigate)
			}}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 6 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 6 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.nickname')}
							type={'name'}
							name={'nickname'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 5 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 5 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.email')}
							name={'email'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 4 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 4 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.password')}
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
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
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
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 2 } as React.CSSProperties}
						type={'submit'}
						aria-label="Submit"
					>
						{t('SignupPage.signup')}
					</button>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'button'}
						onClick={() => {
							navigate('/auth/login')
						}}
						aria-label="Navigate to login"
					>
						{t('LoginPage.logIn')}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default SignUpForm
