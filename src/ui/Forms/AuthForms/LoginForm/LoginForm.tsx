import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.scss'
import VisibilityIcon from '@mui/icons-material/Visibility'
import React, { useState } from 'react'
import { onSubmit } from './onSubmit'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { useTranslation } from 'react-i18next'

function LoginForm() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)
	return (
		<form
			className={styles.form}
			onSubmit={e => onSubmit(e, dispatch, navigate)}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 4 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 4 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.email')}
							name={'email'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={t('Shared.password')}
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
					<button
						style={{ '--i': 2 } as React.CSSProperties}
						type={'submit'}
						aria-label="Submit"
					>
						{t('LoginPage.logIn')}
					</button>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'button'}
						onClick={() => navigate('/auth/signup')}
						aria-label="Navigate to sign up"
					>
						{t('SignupPage.signup')}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default LoginForm
