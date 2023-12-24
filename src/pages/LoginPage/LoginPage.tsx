import { useAppDispatch, useAppSelector } from '../../services/Redux/hooks'
import { AuthForm } from '../../ui/Forms/AuthForm/AuthForm'
import LoginForm from '../../ui/Forms/LoginForm/LoginForm'
import PromoSlider from '../../ui/PromoSlider/PromoSlider'
import { getPromoThunk } from '../../entities/Promo/thunk'
import { loginUserThunk } from '../../entities/User/thunk'
import ImgSlider from '../../ui/TrackSlider/TrackSlider'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'
import { Typography } from 'radio-app-uikit'
import Toast from '../../ui/Toast/Toast'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const { promo } = useAppSelector(state => state.promo)
	const navigate = useNavigate()
	const notification = useAppSelector(state => state.notification)
	const ref = useRef({ email: '', password: '' })

	useEffect(() => {
		dispatch(getPromoThunk())
	}, [])

	async function onSubmit(event: React.FormEvent<unknown>) {
		event.preventDefault()
		console.log(Object.fromEntries(new FormData(event.target)))
		const isLogged = await dispatch(loginUserThunk(ref.current))
		if (isLogged) {
			ref.current = { email: '', password: '' }
			navigate('/')
		}
	}
	return (
		<div className={styles.container}>
			{notification.message && <Toast notification={notification} />}
			<div className={styles.imgSliderContainer}>
				<PromoSlider promos={promo} />
			</div>
			<div className={styles.loginContainer}>
				<Typography text={'Log in'} fontSize="32" weight="semibold" />
				<div className={styles.formContainer}>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}
