import { getRadioById } from './RadiosPage/radiosThunk'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { useTheme } from '@mui/material/styles'
import { useAppSelector } from '../redux/hooks'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import * as React from 'react'
import Chat from '../ui/Chat'

export default function RadioPage() {
	const { radio } = useAppSelector(state => state.radio)
	const { id } = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRadioById(id))
	}, [])
	const theme = useTheme()

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
							pb: 1
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
