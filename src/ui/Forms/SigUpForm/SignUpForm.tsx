import { loginUserThunk, signUpThunk } from '../../../entities/User/thunk'
import { useAppDispatch } from '../../../shared/Redux/hooks'
import { useNavigate } from 'react-router-dom'
import styles from './SignUpForm.module.scss'
import React from 'react'

function SignUpForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	async function onSubmit(e: React.FormEvent<unknown>) {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		const isLogged = await dispatch(signUpThunk(formData))
		if (isLogged) {
			navigate('/')
		}
	}
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 6 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 6 } as React.CSSProperties}>
						<input
							className={styles.input}
							placeholder={'Name'}
							required={true}
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
							required={true}
							type={'email'}
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
							required={true}
							name={'password'}
							type={'password'}
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
							placeholder={'Repeat password'}
							required={true}
							name={'repeatPassword'}
							type={'password'}
						/>
					</li>
				</div>
				<div
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 2 } as React.CSSProperties}
						type={'submit'}
					>
						{'Sign up'}
					</button>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'button'}
						onClick={() => navigate('/auth/login')}
					>
						{'Login'}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default SignUpForm
