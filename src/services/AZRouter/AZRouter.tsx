import { Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

const Navbar = lazy(() => import('../../ui/Navbar'))
const Cards = lazy(() => import('../../pages/RadiosPage/RadiosPage'))
const RadioPage = lazy(() => import('../../pages/RadioPage'))
const Cabinet = lazy(() => import('../../pages/Cabinet'))

export default function AZRouter() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Cards />} />
				<Route path="/radio/:id" element={<RadioPage />} />
				<Route path="/cabinet" element={<Cabinet />} />
			</Routes>
		</>
	)
}
