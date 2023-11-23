import { AuthForm, LoginForm } from '../../ui/Forms/AuthForm/AuthForm'
import { useAppDispatch } from '../../services/Redux/hooks'
import { loginUserThunk } from '../../entities/User/thunk'
import { fields } from './config/formFieldsConfiguration'
import { useForm, SubmitHandler } from 'react-hook-form'
import ImgSlider from '../../ui/ImgSlider/ImgSlider'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useRef } from 'react'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const ref = useRef({ email: '', password: '' })

	async function onSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault()

		const isLogged = await dispatch(loginUserThunk(ref.current))
		if (isLogged) {
			ref.current = { email: '', password: '' }
			navigate('/')
		}
	}

	const fields = [
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
		{ text: 'Login', type: 'submit' },
		{
			text: 'Sign up',
			onClick: () => navigate('/auth/signup'),
			type: 'button'
		}
	]
	return (
		<div className={styles.container}>
			<div className={styles.loginContainer}>
				<Typography text={'Log in'} fontSize="16px" weight="semibold" />
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
