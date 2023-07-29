import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'
import SensorDoorIcon from '@mui/icons-material/SensorDoor'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logoutThunk } from '../redux/slices/users/thunkActions'

export default function Navbar() {
	const user = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const [value, setValue] = React.useState(0)
	const navigate = useNavigate()
	const logoutHandler = () => {
		dispatch(logoutThunk())
		navigate('/')
	}

	return (
		<Box
			sx={{
				width: '100%',
				marginBottom: '20px',
				backgroundColor: '#111',
				color: '#4c4cff',
			}}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
				sx={{
					justifyContent: 'space-around',
					width: '100%',
				}}
			>
				<BottomNavigationAction
					label="Главная"
					icon={<MusicNoteIcon />}
					onClick={() => navigate('/')}
					sx={{
						'&.Mui-selected': {
							color: '#4c4cff',
							backgroundColor: '#fff',
						},
					}}
				/>
				<BottomNavigationAction
					label="Любимое"
					icon={<FavoriteIcon />}
					sx={{
						'&.Mui-selected': {
							color: '#4c4cff',
							backgroundColor: '#fff',
						},
					}}
				/>
				{user.status === 'logged' ? (
					<Box>
						<BottomNavigationAction
							label="Личный кабинет"
							icon={<PersonIcon />}
							sx={{
								'&.Mui-selected': {
									color: '#4c4cff',
									backgroundColor: '#fff',
								},
							}}
						/>
						<BottomNavigationAction
							label="Выйти"
							icon={<SensorDoorIcon />}
							onClick={logoutHandler}
							sx={{
								'&.Mui-selected': {
									color: '#4c4cff',
									backgroundColor: '#fff',
								},
							}}
						/>
					</Box>
				) : (
					<BottomNavigationAction
						label="Войти"
						icon={<SensorDoorIcon />}
						onClick={() => navigate('/login')}
						sx={{
							'&.Mui-selected': {
								color: '#4c4cff',
								backgroundColor: '#fff',
							},
						}}
					/>
				)}
			</BottomNavigation>
		</Box>
	)
}
