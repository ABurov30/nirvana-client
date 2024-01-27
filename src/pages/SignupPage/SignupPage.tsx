import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from 'nirvana-uikit'

import { useAppSelector } from 'shared/Redux/hooks'

import SignUpForm from 'UI/Forms/AuthForms/SigUpForm/SignUpForm'
import PromoTitle from 'UI/PromoTitle/PromoTitle'

import styles from './SignupPage.module.scss'

export default function SignupPage(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false)
	const { theme } = useAppSelector(state => state.app)
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.promoContainer}>
				{isVisible ? (
					<Typography text="🙉" fontSize="200px" />
				) : (
					<Typography text="🙈" fontSize="200px" />
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
