import {
	AccountNavbarButton,
	FavoritesNavbarButton,
	HomeNavbarButton,
	NavSection,
	Navbar as RadioNavbar,
	RadioNavbarButton,
	SettingsNavbarButton,
	LogoNavbarButton
} from 'radio-app-uikit'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<RadioNavbar isHovered={isHovered} setIsHovered={setIsHovered}>
			<NavSection>
				<LogoNavbarButton onClick={() => navigate('/')} />
			</NavSection>
			<NavSection>
				<HomeNavbarButton
					onClick={() => navigate('/')}
					isActive={location.pathname === '/'}
				/>
			</NavSection>
			<NavSection>
				<FavoritesNavbarButton
					onClick={() => navigate('/favorites')}
					isActive={location.pathname === '/favorites'}
				/>
				<NavbarButton />
					onClick={() => navigate('/')}
					isActive={location.pathname === '/'}
				/>
				<RadioNavbarButton
					onClick={() => navigate('/radio')}
					isActive={location.pathname === '/radio'}
				/>
			</NavSection>
			<NavSection>
				<AccountNavbarButton
					onClick={() => navigate('/account')}
					isActive={location.pathname === '/account'}
				/>
				<SettingsNavbarButton
					onClick={() => navigate('/settings')}
					isActive={location.pathname === '/settings'}
				/>
			</NavSection>
		</RadioNavbar>
	)
}
