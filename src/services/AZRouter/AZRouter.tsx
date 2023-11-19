import { useGetAllRadios } from '../../hooks/useGetAllRadios'
import MainPage from '../../pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../Redux/hooks'
import React, { Suspense, lazy } from 'react'
import styles from './AZRouter.module.scss'
import Navbar from '../../ui/Navbar/Navbar'
import Player from '../../ui/Player/Player'
import OldNavbar from '../../ui/OldNavbar'

export default function AZRouter() {
	useGetAllRadios()
	const { radios } = useAppSelector(state => state.radio)
	console.log(radios, 'radios')
	return (
		<div className={styles.azContainer}>
			<Navbar />
			<Player tracks={radios} />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</div>
	)
}
