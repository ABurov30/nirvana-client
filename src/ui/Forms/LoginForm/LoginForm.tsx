import { loginUserThunk } from '../../../entities/User/thunk'
import { useAppDispatch } from '../../../shared/Redux/hooks'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.scss'
import { IFormProps } from './types'
import React from 'react'

function LoginForm() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	async function onSubmit(e: React.FormEvent<unknown>) {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		const isLogged = await dispatch(loginUserThunk(formData))
		console.log(isLogged)
		if (isLogged) {
			navigate('/')
		}
	}
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<ul className={styles.wrapper}>
				<div
					style={{ '--i': 4 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 4 } as React.CSSProperties}>
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
					style={{ '--i': 3 } as React.CSSProperties}
					className={styles.blured}
				>
					<li style={{ '--i': 3 } as React.CSSProperties}>
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
					style={{ '--i': 2 } as React.CSSProperties}
					className={styles.blured}
				>
					<button
						style={{ '--i': 2 } as React.CSSProperties}
						type={'submit'}
					>
						{'Login'}
					</button>
					<button
						style={{ '--i': 1 } as React.CSSProperties}
						type={'button'}
						onClick={() => navigate('/auth/signup')}
					>
						{'Sign up'}
					</button>
				</div>
			</ul>
		</form>
	)
}

export default LoginForm
