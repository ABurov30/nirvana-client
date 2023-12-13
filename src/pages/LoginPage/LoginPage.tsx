import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import { AuthForm, LoginForm } from '../../ui/Forms/AuthForm/AuthForm'
import { getTopImagesThunk } from '../../entities/Images/thunk'
import { loginUserThunk } from '../../entities/User/thunk'
import { fields } from './config/formFieldsConfiguration'
import { request } from '../../services/Request/Requets'
import { useForm, SubmitHandler } from 'react-hook-form'
import ImgSlider from '../../ui/ImgSlider/ImgSlider'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'
import { Typography } from 'radio-app-uikit'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const { images } = useAppSelector(state => state.images)
	const navigate = useNavigate()
	const ref = useRef({ email: '', password: '' })

	useEffect(() => {
		dispatch(getTopImagesThunk())
	}, [])

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
			placeholder: 'Password',
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
	console.log(images)
	return (
		<div className={styles.container}>
			<div className={styles.imgSliderContainer}>
				<ImgSlider promos={images} />
			</div>
			<div className={styles.loginContainer}>
				<Typography text={'Log in'} fontSize="32" weight="semibold" />
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
