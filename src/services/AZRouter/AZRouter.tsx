import MainPage from '../../pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import styles from './AZRouter.module.scss'
import Navbar from '../../ui/Navbar/Navbar'
import OldNavbar from '../../ui/OldNavbar'

export default function AZRouter() {
	return (
		<div className={styles.azContainer}>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</div>
	)
}
