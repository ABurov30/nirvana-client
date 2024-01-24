import styles from './AZLayout.module.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { useAppSelector } from 'shared/Redux/hooks'
import Navbar from 'UI/Navbar/Navbar'
import AvatarButton from 'UI/Buttons/AvatarButton/AvatarButton'
import { ActiveType } from 'entities/User/types'
import Burger from 'UI/Menu/Burger'
import { Player } from 'UI/Player/Player'


export default function AZLayout() {
	const user = useAppSelector(state => state.user)
	const { isPlayMode } = useAppSelector(state => state.app)

	return (
		<div className={styles.AZLayout}>
			<Navbar />
			<AvatarButton nickname={(user as unknown as ActiveType).nickname} />
			<Burger />
			<Outlet />
			{isPlayMode && <Player />}
		</div>
	)
}
