import { BlockButton } from 'nirvana-uikit'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
//@ts-ignore
import styles from './Burger.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../shared/Redux/hooks'
import { ClickAwayListener } from '@mui/material'

export default function Burger() {
	const [isCollapse, setIsCollapse] = useState(false)
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { theme } = useAppSelector(state => state.app)
	return (
		<ClickAwayListener onClickAway={() => setIsCollapse(false)}>
			<div
				className={`${styles.burger} 'burger'`}
				onClick={() => setIsCollapse(prev => !prev)}
			>
				{!isCollapse && (
					<div className={styles.burgerBottom}>
						<MenuIcon
							style={{
								color: theme === 'dark' ? '#F3F3F3' : '#2A2630'
							}}
						/>
					</div>
				)}

				{isCollapse && (
					<div
						className={`${styles.burgerItems} ${
							theme ? styles.dark : ''
						}`}
					>
						<BlockButton
							onClick={() => navigate('/favorites')}
							text={t('Navbar.favorites')}
							type="button"
						/>
						<BlockButton
							onClick={() => navigate('/')}
							text={t('Navbar.tracks')}
							type="button"
						/>
						<BlockButton
							onClick={() => navigate('/radio')}
							text={t('Navbar.radios')}
							type="button"
						/>
						<BlockButton
							onClick={() => navigate('/settings')}
							text={t('Navbar.settings')}
							type="button"
						/>
					</div>
				)}
			</div>
		</ClickAwayListener>
	)
}
