import {
	AccountNavbarButton,
	FavoritesNavbarButton,
	HomeNavbarButton,
	NavSection,
	Navbar as RadioNavbar,
	RadioNavbarButton,
	SettingsNavbarButton,
	LogoNavbarButton,
	TrackNavbarButton,
	Typography
} from 'radio-app-uikit'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Navbar.module.scss'
import { useAppSelector } from '../../shared/Redux/hooks'

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<div className={'navbar'}>
			<RadioNavbar isHovered={isHovered} setIsHovered={setIsHovered}>
				<NavSection>
					<LogoNavbarButton onClick={() => navigate('/')} />
				</NavSection>
				<NavSection>
					<FavoritesNavbarButton
						onClick={() => navigate('/favorites')}
						isActive={location.pathname === '/favorites'}
					/>
					<TrackNavbarButton
						onClick={() => navigate('/')}
						isActive={location.pathname === '/'}
					/>
					<RadioNavbarButton
						onClick={() => navigate('/radio')}
						isActive={location.pathname === '/radio'}
					/>
				</NavSection>
				<NavSection>
					<SettingsNavbarButton
						onClick={() => navigate('/settings')}
						isActive={location.pathname === '/settings'}
					/>
				</NavSection>
				<NavSection>
					<div className={styles.themeSwitcherContainer}>
						{isHovered && <Typography text="Mode" fontSize="16" />}
						<ThemeSwitcher />
					</div>
				</NavSection>
			</RadioNavbar>
		</div>
	)
}
