import { Outlet } from 'react-router-dom'

import { ActiveType } from 'entities/User/types'

import { useAppSelector } from 'shared/Redux/hooks'

import AvatarButton from 'UI/Buttons/AvatarButton/AvatarButton'
import Burger from 'UI/Menu/Burger'
import Navbar from 'UI/Navbar/Navbar'
import { Player } from 'UI/Player/Player'

import styles from './AZLayout.module.scss'

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
