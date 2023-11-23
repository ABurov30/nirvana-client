import PrivateRouter from '../../../HOC/PrivateRouter/PrivateRouter'
import { useAppSelector } from '../../../services/Redux/hooks'
import MainLayout from '../../layout/MainLayout/MainLayout'
import { useCheckUser } from '../../../hooks/useCheckUser'
import Error404 from '../../../pages/Error404/Error404'
import { Route, Routes } from 'react-router-dom'
import NAZRouter from '../NAZRoutes/NAZRoutes'
import AZRoutes from '../AZroutes/AZRoutes'
import React from 'react'

export default function MainRoutes() {
	const user = useCheckUser()
	const notification = useAppSelector(state => state.notification)
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout user={user} notification={notification} />}
			>
				<Route
					element={
						<PrivateRouter isAllowed={user?.status === 'logged'} />
					}
				>
					<Route path="/" element={<AZRoutes user={user} />} />
				</Route>
				<Route path="/auth/*" element={<NAZRouter />} />
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	)
}
