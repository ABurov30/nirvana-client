import { Route, Routes } from 'react-router-dom'

import React, { lazy } from 'react'
import PrivateRouter from './HOC/PrivateRouter/PrivateRouter'
import NAZRouter from './services/NAZRouter/NAZRouter'
import AZRouter from './services/AZRouter/AZRouter'
import { useCheckUser } from './hooks/useCheckUser'
import { Loader } from 'radio-app-uikit'

const Error404 = lazy(() => import('./pages/Error404/Error404'))

function App(): JSX.Element {
	const user = useCheckUser()
	console.log(user)
	return (
		<div className="body">
			{user.status === 'fetching' ? (
				<Loader />
			) : (
				<Routes>
					<Route path="/auth/*" element={<NAZRouter />} />
					<Route
						element={
							<PrivateRouter
								isAllowed={user.status === 'logged'}
							/>
						}
					>
						<Route path="/" element={<AZRouter />} />
					</Route>
					<Route path="*" element={<Error404 />} />
				</Routes>
			)}
		</div>
	)
}

export default App
