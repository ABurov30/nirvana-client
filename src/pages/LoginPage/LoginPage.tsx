import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography } from 'nirvana-uikit'

import { getPromoThunk } from 'entities/Promo/thunk'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'
import LoginForm from 'shared/UI/Forms/AuthForms/LoginForm/LoginForm'
import PromoSlider from 'shared/UI/PromoSlider/PromoSlider'

import styles from './LoginPage.module.scss'
import { t } from 'i18next'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const { promo } = useAppSelector(state => state.promo)
	const navigate = useNavigate()

	

	useEffect(() => {
		dispatch(getPromoThunk())
	}, [])

	const { theme } = useAppSelector(state => state.app)

	return (
		<div className={styles.container}>
			<div className={styles.imgSliderContainer}>
				<PromoSlider promos={promo} />
			</div>
			<div className={styles.loginContainer}>
				<Typography
					text={t('LoginPage.logIn')}
					fontSize="2em"
					weight="semibold"
				/>
				<div className={styles.formContainer}>
					<LoginForm />
					<div
						className={`${styles.forgetPassword} ${
							theme === 'light' ? styles.light : styles.dark
						}`}
						onClick={() => navigate('/auth/findEmail')}
					>
						<Typography text={t('LoginPage.forgetPassword')} />
					</div>
				</div>
			</div>
		</div>
	)
}
