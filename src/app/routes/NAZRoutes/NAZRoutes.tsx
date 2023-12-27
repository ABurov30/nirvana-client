import { Route, Routes } from 'react-router-dom'
import React, { lazy } from 'react'
const EmailPage = lazy(() => import('../../../pages/EmailPage/EmailPage'))
const SignupPage = lazy(() => import('../../../pages/SignupPage/SignupPage'))
const ResetPasswordPage = lazy(
	() => import('../../../pages/ResetPasswordPage/ResetPasswordPage')
)
const LoginPage = lazy(() => import('../../../pages/LoginPage/LoginPage'))

function NAZRoutes() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/findEmail" element={<EmailPage />} />
			<Route path="/:userId" element={<ResetPasswordPage />} />
		</Routes>
	)
}

export default NAZRoutes
