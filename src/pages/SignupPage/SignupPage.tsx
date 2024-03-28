import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from 'nirvana-uikit'

import { useAppSelector } from 'shared/Redux/hooks'
import SignUpForm from 'shared/UI/Forms/AuthForms/SigUpForm/SignUpForm'

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
				<Typography
					color="#f3f3f3"
					weight="semibold"
					fontSize="2em"
					textAlign="center"
					text={t('SignupPage.phrase')}
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
