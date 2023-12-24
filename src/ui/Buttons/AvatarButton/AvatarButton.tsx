import { useAppDispatch } from '../../../shared/Redux/hooks'
import { logoutThunk } from '../../../entities/User/thunk'
import styles from './AvatarButton.module.scss'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { AvatarProps } from './types'
import * as React from 'react'

function AvatarButton({ nickname }: AvatarProps) {
	const dispatch = useAppDispatch()
	return (
		<button
			className={styles.avatarContainer}
			onClick={() => dispatch(logoutThunk())}
		>
			<Avatar sx={{ bgcolor: '#6360FF', width: '100%', height: '100%' }}>
				{nickname[0]}
			</Avatar>
		</button>
	)
}

export default AvatarButton
