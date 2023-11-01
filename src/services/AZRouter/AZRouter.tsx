import { Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

const Navbar = lazy(() => import('../../ui/Navbar'))
const Cards = lazy(() => import('../../pages/MainPage/MainPage'))
const RadioPage = lazy(() => import('../../pages/RadioPage/RadioPage'))

export default function AZRouter() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Cards />} />
				<Route path="/radio/:id" element={<RadioPage />} />
			</Routes>
		</>
	)
}
