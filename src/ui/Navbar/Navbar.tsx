import {
	FavoritesNavbarButton,
	NavSection,
	Navbar as RadioNavbar,
	RadioNavbarButton,
	SettingsNavbarButton,
	LogoNavbarButton,
	TrackNavbarButton,
	Typography
} from 'nirvana-uikit'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
//@ts-ignore
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false)
	const { t } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation()
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
					<RadioNavbarButton
						onClick={() => navigate('/radio')}
						isActive={location.pathname === '/radio'}
						text={t('Navbar.radios')}
					/>
				</NavSection>
				<NavSection>
					<SettingsNavbarButton
						onClick={() => navigate('/settings')}
						isActive={location.pathname === '/settings'}
						text={t('Navbar.settings')}
					/>
				</NavSection>
				<NavSection>
					<div className={styles.themeSwitcherContainer}>
						{isHovered && <Typography text={t('Shared.theme')} />}
						<ThemeSwitcher />
					</div>
				</NavSection>
			</RadioNavbar>
		</div>
	)
}
