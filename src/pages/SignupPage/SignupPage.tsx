import { loginUserThunk, signUpThunk } from '../../entities/User/thunk'
import { useAppDispatch } from '../../services/Redux/hooks'
import { AuthForm } from '../../ui/AuthForm/AuthForm'
import { useNavigate } from 'react-router-dom'
import styles from './SignupPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useRef } from 'react'

export default function SignupPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const ref = useRef({ name: '', email: '', password: '' })

	async function onSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault()
		const res = await dispatch(signUpThunk(ref.current))
		ref.current = { name: '', email: '', password: '' }
		console.log(res, 'res in SignUpPage')
		if (res) {
			navigate('/')
		}
	}

	const fields = [
		{
			placeholder: 'Name',
			required: true,
			onChange: (e: Event) => (ref.current.name = e?.target?.value)
		},
		{
			placeholder: 'E-mail',
			type: 'email',
			required: true,
			onChange: (e: Event) => (ref.current.email = e?.target?.value)
		},
		{
			placeholder: 'password',
			type: 'password',
			required: true,
			onChange: (e: Event) => (ref.current.password = e?.target?.value)
		}
	]

	const buttons = [
		{ text: 'Sign up' },
		{
			text: 'Login',
			onClick: () => navigate('/auth/login'),
			type: 'button'
		}
	]
	return (
		<div className={styles.container}>
			<div className={styles.loginContainer}>
				<Typography
					text={'Sign up'}
					fontSize="16px"
					weight="semibold"
				/>
				<div className={styles.formContainer}>
					<AuthForm
						className={styles.form}
						fields={fields}
						buttons={buttons}
						onSubmit={onSubmit}
					/>
				</div>
			</div>
		</div>
	)
}
