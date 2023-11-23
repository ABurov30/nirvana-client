import { useAppSelector } from '../../../services/Redux/hooks'
import MainRoutes from '../../routes/MainRoutes/MainRoutes'
import { useCheckUser } from '../../../hooks/useCheckUser'
import Toast from '../../../ui/Toast/Toast'
import { Outlet } from 'react-router-dom'
import { MainLayoutProps } from './types'
import { Loader } from 'radio-app-uikit'
import React from 'react'

function MainLayout({ user, notification }: MainLayoutProps) {
	return (
		<>
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
		</>
	)
}

export default MainLayout
