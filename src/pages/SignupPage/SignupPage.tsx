import SignUpForm from '../../UI/Forms/AuthForms/SigUpForm/SignUpForm'
import PromoTitle from '../../UI/PromoTitle/PromoTitle'
import { useAppSelector } from '../../shared/Redux/hooks'
import styles from './SignupPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useState } from 'react'

export default function SignupPage(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false)
	const { theme } = useAppSelector(state => state.app)
	return (
		<div className={styles.container}>
			<div className={styles.promoContainer}>
				{isVisible ? (
					<Typography text="🙉" fontSize="200" />
				) : (
					<Typography text="🙈" fontSize="200" />
				)}
				<PromoTitle
					prePhrase="Dive into"
					rotatedPhrases={[
						'emotions',
						'feelings',
						'pleasure',
						'Nirvana!'
					]}
				/>
			</div>
			<div
				className={`${styles.signUpContainer} ${
					theme === 'light' ? '' : styles.dark
				}`}
			>
				<div className={styles.titleContainer}>
					<Typography
						text="Sign up"
						fontSize="32"
						weight="semibold"
					/>
				</div>
				<div className={styles.formContainer}>
					<SignUpForm
						isVisible={isVisible}
						setIsVisible={setIsVisible}
					/>
				</div>
			</div>
		</div>
	)
}
