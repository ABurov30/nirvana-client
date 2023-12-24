import { loginUserThunk, signUpThunk } from '../../entities/User/thunk'
import SignUpForm from '../../ui/Forms/SigUpForm/SignUpForm'
import { AuthForm } from '../../ui/Forms/AuthForm/AuthForm'
import { useAppDispatch } from '../../shared/Redux/hooks'
import PromoTitle from '../../ui/PromoTitle/PromoTitle'
import { useNavigate } from 'react-router-dom'
import styles from './SignupPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useRef } from 'react'

export default function SignupPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const ref = useRef({
		name: '',
		email: '',
		password: '',
		repeatPassword: ''
	})

	async function onSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault()
		const res = await dispatch(signUpThunk(ref.current))
		ref.current = { name: '', email: '', password: '', repeatPassword: '' }
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
			placeholder: 'Password',
			type: 'password',
			required: true,
			onChange: (e: Event) => (ref.current.password = e?.target?.value)
		},
		{
			placeholder: 'Repeat password',
			type: 'password',
			required: true,
			onChange: (e: Event) =>
				(ref.current.repeatPassword = e?.target?.value)
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
			<div className={styles.promoContainer}>
				{/* <Typography
					text="Dive into Nirvana"
					fontSize="70"
					weight="semibold"
					color="#F3F3F3"
				/> */}
				<PromoTitle
					prePhrase="Dive into"
					rotatedPhrases={[
						'emotions',
						'feelings',
						'pleasure',
						'Nirvana !'
					]}
				/>
			</div>
			<div className={styles.loginContainer}>
				<div className={styles.titleContainer}>
					<Typography
						text="Sign up"
						fontSize="32"
						weight="semibold"
					/>
				</div>
				<div className={styles.formContainer}>
					<SignUpForm />
				</div>
			</div>
		</div>
	)
}
