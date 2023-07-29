import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cards from './pages/Cards'
import Navbar from './ui/Navbar'
import RadioPage from './pages/RadioPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Cabinet from './pages/Cabinet'

import { useAppSelector } from './redux/hooks'

function App(): JSX.Element {
	const user = useAppSelector(state => state.user)
	console.log('USER', user)
	return (
		<div className="body">
			<Navbar />
			<Routes>
				<Route path="/" element={<Cards />} />
				<Route path="/:id" element={<RadioPage />} />
				<Route path="/signUp" element={<Cabinet />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signUp" element={<SignupPage />} />
			</Routes>
		</div>
	)
}

export default App
