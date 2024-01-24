
import { Outlet } from 'react-router-dom'
import { type MainLayoutProps } from './types'
import { Loader } from 'nirvana-uikit'
import React from 'react'
import styles from './MainLayout.module.scss'
import useTheme from 'shared/hooks/useTheme/useTheme'
import { useAppSelector } from 'shared/Redux/hooks'
import Toast from 'UI/Toast/Toast'

function MainLayout({ user }: MainLayoutProps) {
	const notification = useAppSelector(state => state.notification)

	useTheme()

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
