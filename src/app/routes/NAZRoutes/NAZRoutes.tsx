import LoginPage from '../../../pages/LoginPage/LoginPage'
import { Route, Routes } from 'react-router-dom'

import SignupPage from '../../../pages/SignupPage/SignupPage'
import React from 'react'

function NAZRoutes() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Routes>
	)
}

export default NAZRoutes
