import { Outlet } from 'react-router-dom'

import { Messenger } from 'widgets/Messenger/Messenger'

import { ActiveType } from 'entities/User/types'

import { useAppSelector } from 'shared/Redux/hooks'
import AvatarButton from 'shared/UI/AvatarButton/AvatarButton'
import Burger from 'shared/UI/Menu/Burger'
import Navbar from 'shared/UI/Navbar/Navbar'
import { Player } from 'shared/UI/Player/Player'

import styles from './AZLayout.module.scss'

export default function AZLayout() {
	const user = useAppSelector(state => state.user)
	const { isPlayMode } = useAppSelector(state => state.app)

	return (
		<div className={styles.AZLayout}>
			<Navbar />
			<AvatarButton nickname={(user as unknown as ActiveType).nickname} />
			<Messenger />
			<Burger />
			<Outlet />
			{isPlayMode && <Player />}
		</div>
	)
}
