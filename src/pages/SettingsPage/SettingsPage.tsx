import React, { useState } from 'react'
import styles from './SettingsPage.module.scss'
import Avatar from '@mui/material/Avatar'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import { TextField } from '@mui/material'
import SelectInput from '../../UI/Inputs/Select/Select'
import { Language, Theme } from '../../entities/App/types'
import { BlockButton, Typography } from 'radio-app-uikit'
import { changeTheme, setLanguage } from '../../entities/App/slice'
import { deleteUserThunk, logoutThunk } from '../../entities/User/thunk'
import { onSubmitNewPassword } from '../../shared/utils/onSubmitNewPassword'
import { onSubmit } from './onSubmit'
import VisibilityIcon from '@mui/icons-material/Visibility'

function SettingsPage() {
	const user = useAppSelector(state => state.user)
	const { language, theme } = useAppSelector(state => state.app)
	const dispatch = useAppDispatch()
	const [isVisible, setIsVisible] = useState(false)
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<Typography text="Account" weight="medium" />
				<form onSubmit={e => onSubmit(e, dispatch, user)}>
					<Avatar
						sx={{
							bgcolor: '#BDBEBE',
							width: '70px',
							height: '70px'
						}}
					>
						{user.nickname[0]}
					</Avatar>

					<TextField
						label="Name"
						variant="standard"
						name="nickname"
						defaultValue={user.nickname}
						sx={{ minWidth: 100, width: '40%' }}
					/>

					<TextField
						label="E-mail"
						variant="standard"
						name="email"
						defaultValue={user.email}
						sx={{ minWidth: 100, width: '40%' }}
					/>

					<BlockButton text={'Save'} type="submit" />
				</form>
			</div>
			<div className={styles.formContainer}>
				<Typography text="Change password" weight="medium" />
				<form onSubmit={e => onSubmitNewPassword(e, dispatch, user.id)}>
					<div className={styles.inputContainer}>
						<TextField
							label="Password"
							variant="standard"
							type={isVisible ? 'text' : 'password'}
							name="password"
							sx={{ minWidth: 100, width: '100%' }}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => setIsVisible(!isVisible)}
						>
							<VisibilityIcon style={{ color: '#434544' }} />
						</div>
					</div>
					<div className={styles.inputContainer}>
						<TextField
							label="Repeat password"
							type={isVisible ? 'text' : 'password'}
							variant="standard"
							name="repeatPassword"
							sx={{ minWidth: 100, width: '100%' }}
						/>
						<div
							className={styles.visibilityButton}
							onClick={() => setIsVisible(!isVisible)}
						>
							<VisibilityIcon style={{ color: '#434544' }} />
						</div>
					</div>
					<BlockButton text={'Save'} type="submit" />
				</form>
			</div>
			<div className={styles.formContainer}>
				<Typography text="Settings" weight="medium" />
				<form>
					<SelectInput
						label="Language"
						options={[
							{ label: 'English', value: Language.eng },
							{ label: 'Russian', value: Language.ru }
						]}
						value={language}
						onChange={setLanguage}
						dispatch={dispatch}
					/>
					<SelectInput
						label="Theme"
						options={[
							{ label: 'Light', value: Theme.light },
							{ label: 'Dark', value: Theme.dark }
						]}
						value={theme}
						onChange={changeTheme}
						dispatch={dispatch}
					/>
				</form>
			</div>
			<button
				className={styles.redButton}
				onClick={() => dispatch(logoutThunk())}
			>
				Log out
			</button>
			<button
				className={styles.redButton}
				onClick={() => dispatch(deleteUserThunk(user.id))}
			>
				Delete account
			</button>
		</div>
	)
}

export default SettingsPage
