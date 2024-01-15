import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import LoginForm from '../../UI/Forms/AuthForms/LoginForm/LoginForm'
import PromoSlider from '../../UI/PromoSlider/PromoSlider'
import { getPromoThunk } from '../../entities/Promo/thunk'
import { loginUserThunk } from '../../entities/User/thunk'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
//@ts-ignore
import styles from './LoginPage.module.scss'
import { Typography } from 'nirvana-uikit'
import Toast from '../../UI/Toast/Toast'
import { useTranslation } from 'react-i18next'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const { promo } = useAppSelector(state => state.promo)
	const navigate = useNavigate()
	const ref = useRef({ email: '', password: '' })
	const { t } = useTranslation()

	useEffect(() => {
		dispatch(getPromoThunk())
	}, [])

	const { theme } = useAppSelector(state => state.app)

	async function onSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault()
		const isLogged = await dispatch(loginUserThunk(ref.current))
		if (isLogged as unknown as boolean) {
			ref.current = { email: '', password: '' }
			navigate('/')
		}
	}
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
