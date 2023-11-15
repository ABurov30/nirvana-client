import { Route, Routes } from 'react-router-dom'

import PrivateRouter from './HOC/PrivateRouter/PrivateRouter'
import { useAppSelector } from './services/Redux/hooks'
import NAZRouter from './services/NAZRouter/NAZRouter'
import AZRouter from './services/AZRouter/AZRouter'
import { useCheckUser } from './hooks/useCheckUser'
import { Loader } from 'radio-app-uikit'
import Toast from './ui/Toast/Toast'
import React, { lazy } from 'react'

const Error404 = lazy(() => import('./pages/Error404/Error404'))

function App(): JSX.Element {
	const user = useCheckUser()
	const notification = useAppSelector(state => state.notification)
	console.log(notification, 'notification in App')
	console.log(user, 'user in App')
	return (
		<div className="body">
			{user?.status === 'fetching' ? (
				<Loader />
			) : (
				<>
					{notification.message && (
						<Toast
							severity={notification.severity}
							message={notification.message}
						/>
					)}
					<Routes>
						<Route path="/auth/*" element={<NAZRouter />} />
						<Route
							element={
								<PrivateRouter
									isAllowed={user?.status === 'logged'}
								/>
							}
						>
							<Route path="/" element={<AZRouter />} />
						</Route>
						<Route path="*" element={<Error404 />} />
					</Routes>
				</>
			)}
		</div>
	)
}

export default App
