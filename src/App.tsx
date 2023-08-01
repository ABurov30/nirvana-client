import { Route, Routes } from 'react-router-dom'

import React, { lazy } from 'react'

import NAZRooter from './services/NAZRooter/NAZrooter'
import AZrooter from './services/AZRooter/AZrooter'
import { useAppSelector } from './redux/hooks'
const Error404 = lazy(() => import('./pages/Error404'))

function App(): JSX.Element {
	const user = useAppSelector(state => state.user)
	console.log('USER', user)
	return (
		<div className="body">
			<Routes>
				<Route path="/" element={<AZrooter />} />
				<Route path="/login" element={<NAZRooter />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default App
