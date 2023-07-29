import * as React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import { getRadioById } from '../redux/slices/radios/radiosThunk'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chat from '../ui/Chat'

export default function RadioPage() {
	const { radio } = useAppSelector(state => state.radio)
	const { id } = useParams()
	const dispatch = useDispatch()
	console.log(id)
	useEffect(() => {
		dispatch(getRadioById(id))
	}, [])
	const theme = useTheme()
	console.log(radio)

	const [isPlaying, setIsPlaying] = React.useState(false)

	const handleTogglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<Box>
			<Card sx={{ display: 'flex' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h5">
							{radio?.name}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							{radio?.votes} Подписчиков
						</Typography>
					</CardContent>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							pl: 1,
							pb: 1,
						}}
					>
						{isPlaying ? (
							<audio src={radio?.url} controls autoPlay>
								Ваш браузер не поддерживает элемент аудио.
							</audio>
						) : (
							<Button
								variant="contained"
								onClick={handleTogglePlay}
							>
								Воспроизвести
							</Button>
						)}
					</Box>
				</Box>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image={
						radio?.favicon === ''
							? '/img/cover.jpeg'
							: radio?.favicon
					}
					alt={radio?.name}
				/>
			</Card>
			<Chat />
		</Box>
	)
}
