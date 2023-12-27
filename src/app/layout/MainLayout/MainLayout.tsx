import { useAppSelector } from '../../../shared/Redux/hooks'
import Toast from '../../../UI/Toast/Toast'
import { Outlet } from 'react-router-dom'
import { type MainLayoutProps } from './types'
import { Loader } from 'radio-app-uikit'
import React from 'react'
import styles from './MainLayout.module.scss'

function MainLayout({ user }: MainLayoutProps) {
	const notification = useAppSelector(state => state.notification)
	return (
		<div className={styles.mainLayout}>
			{user?.status === 'fetching' ? (
				<Loader />
			) : (
				<>
					{notification.message && (
						<Toast notification={notification} />
					)}
					<Outlet />
				</>
			)}
		</div>
	)
}

export default MainLayout
