import React, { useState } from 'react'
//@ts-ignore
import styles from './SettingsPage.module.scss'
import Avatar from '@mui/material/Avatar'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'
import { TextField } from '@mui/material'
import SelectInput from '../../UI/Inputs/Select/Select'
import { Language, Theme } from '../../entities/App/types'
import { BlockButton, Typography } from 'radio-app-uikit'
import { changeTheme } from '../../entities/App/slice'
import { deleteUserThunk, logoutThunk } from '../../entities/User/thunk'
import { onSubmitNewPassword } from '../../shared/utils/onSubmitNewPassword'
import { onSubmit } from './onSubmit'
import { useTranslation } from 'react-i18next'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FilesUploadForm from '../../UI/Forms/FilesUploadIForm/FilesUploadIForm'

function SettingsPage() {
	const user = useAppSelector(state => state.user)
	const { theme } = useAppSelector(state => state.app)
	const dispatch = useAppDispatch()
	const { t, i18n } = useTranslation()
	const [lang, setLang] = useState(i18n.language)
	const [isVisible, setIsVisible] = useState(false)
	function changeLanguage(lang: string) {
		i18n.changeLanguage(lang)
		setLang(i18n.language)
	}
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<Typography
					text={t('SettingsPage.accountInfo')}
					weight="medium"
				/>
				<form onSubmit={e => onSubmit(e, dispatch, user)}>
					<Avatar
						sx={{
							bgcolor: '#BDBEBE',
							width: '3em',
							height: '3em'
						}}
					>
						{user.nickname[0]}
					</Avatar>

					<TextField
						label={t('SettingsPage.nickname')}
						variant="standard"
						name="nickname"
						defaultValue={user.nickname}
						sx={{ minWidth: '5em', width: '40%', fontSize: '1em' }}
					/>
					<TextField
						label={t('SettingsPage.email')}
						variant="standard"
						name="email"
						defaultValue={user.email}
						sx={{ minWidth: '5em', width: '40%', fontSize: '1em' }}
					/>

					<BlockButton text={'Save'} type="submit" />
				</form>
			</div>
			<div className={styles.formContainer}>
				<Typography
					text={t('SettingsPage.changePassword')}
					weight="medium"
				/>
				<form onSubmit={e => onSubmitNewPassword(e, dispatch, user.id)}>
					<div className={styles.inputContainer}>
						<TextField
							label={t('SettingsPage.password')}
							variant="standard"
							type={isVisible ? 'text' : 'password'}
							name="password"
							sx={{
								minWidth: '5em',
								width: '100%',
								fontSize: '1em'
							}}
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
							label={t('SettingsPage.repeatPassword')}
							type={isVisible ? 'text' : 'password'}
							variant="standard"
							name="repeatPassword"
							sx={{
								minWidth: '5em',
								width: '100%',
								fontSize: '1em'
							}}
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
				<Typography text={t('SettingsPage.settings')} weight="medium" />
				<form>
					<SelectInput
						label={t('SettingsPage.language')}
						options={[
							{
								label: t('SettingsPage.english'),
								value: Language.en
							},
							{
								label: t('SettingsPage.russian'),
								value: Language.ru
							}
						]}
						value={lang}
						onChange={changeLanguage}
					/>

					<SelectInput
						label={t('Shared.theme')}
						options={[
							{
								label: t('SettingsPage.light'),
								value: Theme.light
							},
							{ label: t('SettingsPage.dark'), value: Theme.dark }
						]}
						value={theme}
						onChange={changeTheme}
						dispatch={dispatch}
					/>
				</form>
			</div>
			<FilesUploadForm />
			<button
				className={styles.redButton}
				onClick={() => dispatch(logoutThunk())}
			>
				{t('SettingsPage.logOut')}
			</button>
			<button
				className={styles.redButton}
				onClick={() => dispatch(deleteUserThunk(user.id))}
			>
				{t('SettingsPage.deleteAccount')}
			</button>
		</div>
	)
}

export default SettingsPage
