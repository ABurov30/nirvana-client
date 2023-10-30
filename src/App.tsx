import { Route, Routes } from 'react-router-dom'

import React, { lazy, useLayoutEffect } from 'react'

import { checkUserThunk } from './redux/slices/users/thunkActions'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import PrivateRouter from './HOC/PrivateRouter/PrivateRouter'
import NAZRouter from './services/NAZRouter/NAZRouter'
import AZRouter from './services/AZRouter/AZRouter'
import LoginPage from './pages/LoginPage/LoginPage'
import { useCheckUser } from './hooks/useCheckUser'
import { useAZToggle } from './hooks/useAZToggle'
import { Loader } from 'radio-app-uikit'

const Error404 = lazy(() => import('./pages/Error404'))

function App(): JSX.Element {
	useAZToggle()
	const user = useCheckUser()
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
