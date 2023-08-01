import { Route, Routes } from 'react-router-dom'
import SignupPage from '../../pages/SignupPage'
import LoginPage from '../../pages/LoginPage'
import React from 'react'

export default function NAZRooter() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/signUp" element={<SignupPage />} />
		</Routes>
	)
}
