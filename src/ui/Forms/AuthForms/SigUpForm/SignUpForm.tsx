import { useNavigate } from 'react-router-dom'
import styles from './SignUpForm.module.scss'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { onSubmit } from './onSubmit'
import { useAppDispatch } from '../../../../shared/Redux/hooks'
import { SignUpFormProps } from './types'

function SignUpForm({ isVisible, setIsVisible }: SignUpFormProps) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	return (
		<form
			className={styles.form}
			onSubmit={e => onSubmit(e, dispatch, navigate)}
		>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 6 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 6 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={'Name'}
							type={'name'}
							name={'name'}
					
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
							placeholder={'E-mail'}
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
							placeholder={'Password'}
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
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={'Repeat password'}
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
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 2 } as React.CSSProperties}
						type={'submit'}
						aria-label="Submit"
					>
						{'Sign up'}
					</button>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'button'}
						onClick={() => navigate('/auth/login')}
						aria-label="Navigate to login"
					>
						{'Login'}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default SignUpForm
