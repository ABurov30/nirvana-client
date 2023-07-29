import * as React from 'react'
import { Container } from 'reactstrap'
import {
	Box,
	Button,
	CssBaseline,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material'
import { useAppDispatch } from '../redux/hooks'
import { signUpThunk } from '../redux/slices/users/thunkActions'
import { useNavigate } from 'react-router-dom'

export default function SignupPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const data = Object.fromEntries(new FormData(event.currentTarget))
		const res = dispatch(signUpThunk(data))
		if (res) {
			navigate('/')
		}
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
					Sign up
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit}
					sx={{ mt: 3 }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoFocus
								required
								fullWidth
								id="nick"
								label="Nickname"
								name="nickname"
								autoComplete="nickname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
		</Container>
	)
}
