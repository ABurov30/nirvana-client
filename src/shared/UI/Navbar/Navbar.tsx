import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import {
	FavoritesNavbarButton,
	LogoNavbarButton,
	NavSection,
	Navbar as RadioNavbar,
	RadioNavbarButton,
	SettingsNavbarButton,
	ThemeSwitcher,
	TrackNavbarButton,
	Typography
} from 'nirvana-uikit'

import { changeTheme } from 'entities/App/slice'
import { Theme } from 'entities/App/types'
import { ActiveType } from 'entities/User/types'

import { useAppDispatch, useAppSelector } from 'shared/Redux/hooks'

import styles from './Navbar.module.scss'

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false)
	const { t } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.user)
	const { theme } = useAppSelector(state => state.app)
	return (
		<div className={`${styles.navbar} 'navbar'`}>
			<RadioNavbar isHovered={isHovered} setIsHovered={setIsHovered}>
				<NavSection>
					<LogoNavbarButton onClick={() => navigate('/')} />
				</NavSection>
				<NavSection>
					<FavoritesNavbarButton
						onClick={() => navigate('/favorites')}
						isActive={location.pathname === '/favorites'}
						text={t('Navbar.favorites')}
					/>
					<TrackNavbarButton
						onClick={() => navigate('/')}
						isActive={location.pathname === '/'}
						text={t('Navbar.tracks')}
					/>
					{(user as unknown as ActiveType).isAdmin && (
						<RadioNavbarButton
							onClick={() => navigate('/radio')}
							isActive={location.pathname === '/radio'}
							text={t('Navbar.radios')}
						/>
					)}
				</NavSection>
				<NavSection>
					<SettingsNavbarButton
						onClick={() => navigate('/settings')}
						isActive={location.pathname === '/settings'}
						text={t('Navbar.settings')}
					/>
					<SettingsNavbarButton
						onClick={() => navigate('/messenger')}
						isActive={location.pathname === '/messenger'}
						text={t('Navbar.messenger')}
					/>
				</NavSection>
				<NavSection>
					<div className={styles.themeSwitcherContainer}>
						{isHovered && <Typography text={t('Shared.theme')} />}
						<ThemeSwitcher
							checked={theme === Theme.dark}
							theme={theme}
							changeTheme={() =>
								dispatch(
									changeTheme(
										theme === Theme.light
											? Theme.dark
											: Theme.light
									)
								)
							}
						/>
					</div>
				</NavSection>
			</RadioNavbar>
		</div>
	)
}
