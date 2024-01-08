import AvatarButton from '../../../UI/Buttons/AvatarButton/AvatarButton'
import { useAppSelector } from '../../../shared/Redux/hooks'
import Navbar from '../../../UI/Navbar/Navbar'
import styles from './AZLayout.module.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { Player } from '../../../UI/Player/Player'
import { setCurTracks } from '../../../entities/CurTracks/slice'
import Burger from '../../../UI/Menu/Burger'

export default function AZLayout() {
	const user = useAppSelector(state => state.user)
	const { isPlayMode } = useAppSelector(state => state.app)
	const { curTracks, position } = useAppSelector(state => state.curTracks)
	return (
		<div className={styles.AZLayout}>
			<Navbar />
			<AvatarButton nickname={user?.nickname} />
			<Burger />
			<Outlet />
			{isPlayMode && (
				<Player
					tracks={curTracks}
					position={position}
					setTracks={setCurTracks}
				/>
			)}
		</div>
	)
}
