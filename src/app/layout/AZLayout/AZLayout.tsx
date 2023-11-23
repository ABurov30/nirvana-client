import AvatarButton from '../../../ui/Buttons/AvatarButton/AvatarButton'
import { useGetAllRadios } from '../../../hooks/useGetAllRadios'
import { useAppSelector } from '../../../services/Redux/hooks'
import { logoutThunk } from '../../../entities/User/thunk'
import Navbar from '../../../ui/Navbar/Navbar'
import Player from '../../../ui/Player/Player'
import styles from './AZLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { AZLayoutProps } from './types'
import React from 'react'

export default function AZLayout({ user }: AZLayoutProps) {
	useGetAllRadios()
	const { radios } = useAppSelector(state => state.radio)
	return (
		<div className={styles.AZLayout}>
			<Navbar />
			<AvatarButton nickname={user?.nickname} />
			<Outlet />
			<Player tracks={radios} />
		</div>
	)
}
