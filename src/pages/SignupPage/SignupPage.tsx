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
	return (
		<div className={styles.container}>
			<div className={styles.promoContainer}>
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
