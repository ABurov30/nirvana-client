import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import AZLayout from 'app/layout/AZLayout/AZLayout'
import MainLayout from 'app/layout/MainLayout/MainLayout'

import CodePage from 'pages/CodePage/CodePage'
import EmailPage from 'pages/EmailPage/EmailPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import RadioPage from 'pages/RadioPage/RadioPage'
import ResetPasswordPage from 'pages/ResetPasswordPage/ResetPasswordPage'
import SettingsPage from 'pages/SettingsPage/SettingsPage'
import SignupPage from 'pages/SignupPage/SignupPage'
import TrackPage from 'pages/TrackPage/TrackPage'

import { UserStatus } from 'entities/User/types'

import PrivateRouter from 'shared/HOC/PrivateRouter/PrivateRouter'
import { useCheckUser } from 'shared/hooks/useCheckUser/useCheckUser'

const Error404 = lazy(async () => await import('../../pages/Error404/Error404'))

export default function MainRoutes() {
	const user = useCheckUser()

	return (
		<Routes>
			<Route path="/" element={<MainLayout user={user} />}>
				<Route
					element={
						<PrivateRouter
							isAllowed={
								(user?.status as UserStatus) ===
								UserStatus.active
							}
						/>
					}
				>
					<Route path="/" element={<AZLayout />}>
						<Route path="/radio" element={<RadioPage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
						<Route path="/settings" element={<SettingsPage />} />
						<Route path="/" element={<TrackPage />} />
					</Route>
				</Route>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/findEmail" element={<EmailPage />} />
				<Route path="/codePage" element={<CodePage />} />
				<Route
					path="/resetPassword/:userId"
					element={<ResetPasswordPage />}
				/>
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	)
}
