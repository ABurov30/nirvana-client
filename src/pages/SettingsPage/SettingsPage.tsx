import React from 'react'
import styles from './SettingsPage.module.scss'
import AvatarButton from '../../UI/Buttons/AvatarButton/AvatarButton'
import { AutoComplete, Avatar } from 'antd'
import { useAppSelector } from '../../shared/Redux/hooks'
import { Autocomplete, TextField } from '@mui/material'

function SettingsPage() {
	const user = useAppSelector(state => state.user)
	return (
		<div className={styles.container}>
			<div className={styles.accountContainer}>
				<Avatar
					sx={{ bgcolor: '#6360FF', width: '100%', height: '100%' }}
				>
					{user.nickname[0]}
				</Avatar>
				<TextField
					id="standard-basic"
					label="Name"
					variant="standard"
				/>
				<TextField
					id="standard-basic"
					label="E-mail"
					variant="standard"
				/>
			</div>
			<div className={styles.securityContainer}>
				<TextField
					id="standard-basic"
					label="Password"
					variant="standard"
				/>
				<TextField
					id="standard-basic"
					label="Repeat password"
					variant="standard"
				/>
			</div>
		</div>
	)
}

export default SettingsPage
