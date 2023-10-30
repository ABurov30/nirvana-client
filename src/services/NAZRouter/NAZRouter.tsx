import LoginPage from '../../pages/LoginPage/LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from '../../pages/SignupPage'
import React from 'react'

export default function NAZRouter() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signUp" element={<SignupPage />} />
		</Routes>
	)
}
