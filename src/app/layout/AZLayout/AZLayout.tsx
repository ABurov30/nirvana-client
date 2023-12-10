import AvatarButton from '../../../ui/Buttons/AvatarButton/AvatarButton'
import { useAppSelector } from '../../../services/Redux/hooks'
import Navbar from '../../../ui/Navbar/Navbar'
import Player from '../../../ui/Player/Player'
import styles from './AZLayout.module.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'

export default function AZLayout() {
	const user = useAppSelector(state => state.user)
	const { isPlayMode } = useAppSelector(state => state.isPlayMode)
	const { curTracks } = useAppSelector(state => state.curTracks)
	const { position } = useAppSelector(state => state.curTracks)
	return (
		<div className={styles.AZLayout}>
			<Navbar />
			<AvatarButton nickname={user?.nickname} />
			<Outlet />
			{isPlayMode && (
				<Player
					tracks={curTracks}
					isPlayMode={isPlayMode}
					position={position}
				/>
			)}
		</div>
	)
}
