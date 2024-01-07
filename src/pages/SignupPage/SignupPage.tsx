import { useTranslation } from 'react-i18next'
import SignUpForm from '../../UI/Forms/AuthForms/SigUpForm/SignUpForm'
import PromoTitle from '../../UI/PromoTitle/PromoTitle'
import { useAppSelector } from '../../shared/Redux/hooks'
import styles from './SignupPage.module.scss'
import { Typography } from 'radio-app-uikit'
import React, { useState } from 'react'

export default function SignupPage(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false)
	const { theme } = useAppSelector(state => state.app)
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.promoContainer}>
				{isVisible ? (
					<Typography text="🙉" fontSize="10em" />
				) : (
					<Typography text="🙈" fontSize="10em" />
				)}
				<PromoTitle
					prePhrase={t('SignupPage.prePhrase')}
					rotatedPhrases={[
						t('SignupPage.emotions'),
						t('SignupPage.feelings'),
						t('SignupPage.pleasure'),
						t('Shared.nirvana')
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
						text={t('SignupPage.signup')}
						fontSize="2em"
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
