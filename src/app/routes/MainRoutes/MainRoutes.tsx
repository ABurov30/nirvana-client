import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import AZLayout from 'app/layout/AZLayout/AZLayout'
import MainLayout from 'app/layout/MainLayout/MainLayout'

import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import RadioPage from 'pages/RadioPage/RadioPage'
import SettingsPage from 'pages/SettingsPage/SettingsPage'
import TrackPage from 'pages/TrackPage/TrackPage'

import { UserStatus } from 'entities/User/types'

import PrivateRouter from 'shared/HOC/PrivateRouter/PrivateRouter'
import { useCheckUser } from 'shared/hooks/useCheckUser/useCheckUser'

const Error404 = lazy(
	async () => await import('../../../pages/Error404/Error404')
)

const NAZRouter = lazy(async () => await import('../NAZRoutes/NAZRoutes'))

export default function MainRoutes() {
	const user = useCheckUser()

	return (
		<Routes>
			<Route path="/" element={<MainLayout user={user} />}>
				<Route
					element={
						<PrivateRouter
							isAllowed={
								(user?.status as UserStatus) ===
								UserStatus.active
							}
						/>
					}
				>
					<Route path="/" element={<AZLayout />}>
						<Route path="/radio" element={<RadioPage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
						<Route path="/settings" element={<SettingsPage />} />
						<Route path="/" element={<TrackPage />} />
					</Route>
				</Route>
				<Route path="/auth/*" element={<NAZRouter />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	)
}
