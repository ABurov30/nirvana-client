import React from 'react'
import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from '@mui/material'
import { useAppDispatch } from '../redux/hooks'
import { loginUserThunk } from '../redux/slices/users/thunkActions'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const data = Object.fromEntries(new FormData(event.currentTarget))

		const res = dispatch(loginUserThunk(data))
		if (res) navigate('/')
	}

	return (
		<Container component="main">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					Вход
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Войти
					</Button>
					<Button
						type="button"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={() => navigate('/signUp')}
					>
						Зарегистрироваться
					</Button>
				</Box>
			</Box>
		</Container>
	)
}
