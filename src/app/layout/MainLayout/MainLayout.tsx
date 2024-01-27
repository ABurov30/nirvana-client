import { Outlet } from 'react-router-dom'

import { Loader } from 'nirvana-uikit'

import { type MainLayoutProps } from './types'

import { useAppSelector } from 'shared/Redux/hooks'
import Toast from 'shared/UI/Toast/Toast'
import useTheme from 'shared/hooks/useTheme/useTheme'

import styles from './MainLayout.module.scss'

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
