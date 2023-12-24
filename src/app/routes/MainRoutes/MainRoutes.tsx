import FavoritesPage from '../../../pages/FavoritesPage/FavoritesPage'
import PrivateRouter from '../../../HOC/PrivateRouter/PrivateRouter'
import { useAppSelector } from '../../../services/Redux/hooks'
import MainLayout from '../../layout/MainLayout/MainLayout'
import RadioPage from '../../../pages/RadioPage/RadioPage'
import TrackPage from '../../../pages/TrackPage/TrackPage'
import { useCheckUser } from '../../../hooks/useCheckUser'
import Error404 from '../../../pages/Error404/Error404'
import AZLayout from '../../layout/AZLayout/AZLayout'
import { Route, Routes } from 'react-router-dom'
import NAZRouter from '../NAZRoutes/NAZRoutes'
import AZRoutes from '../AZroutes/AZRoutes'
import React from 'react'

export default function MainRoutes() {
	const user = useCheckUser()

	return (
		<Routes>
			<Route path="/" element={<MainLayout user={user} />}>
				<Route
					element={
						<PrivateRouter isAllowed={user?.status === 'logged'} />
					}
				>
					<Route path="/" element={<AZLayout user={user} />}>
						<Route path="/radio" element={<RadioPage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
						<Route path="/" element={<TrackPage />} />
					</Route>
				</Route>
				<Route path="/auth/*" element={<NAZRouter />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	)
}
