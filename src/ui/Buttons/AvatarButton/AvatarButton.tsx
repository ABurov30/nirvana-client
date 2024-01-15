import { useAppDispatch } from '../../../shared/Redux/hooks'
import { logoutThunk } from '../../../entities/User/thunk'
//@ts-ignore
import styles from './AvatarButton.module.scss'
import Avatar from '@mui/material/Avatar'
import { AvatarProps } from './types'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import React, { useState } from 'react'

function AvatarButton({ nickname }: AvatarProps) {
	const dispatch = useAppDispatch()
	const [isHovered, setIsHovered] = useState(false)
	return (
		<button
			onMouseLeave={() => setIsHovered(false)}
			onMouseEnter={() => setIsHovered(true)}
			className={styles.avatarContainer}
			onClick={() => dispatch(logoutThunk())}
		>
			<Avatar sx={{ bgcolor: '#6360FF', width: '100%', height: '100%' }}>
				{isHovered ? (
					<LogoutOutlinedIcon sx={{ fill: '#F3F3F3' }} />
				) : (
					nickname[0]
				)}
			</Avatar>
		</button>
	)
}

export default AvatarButton
