import { Box, TextField } from '@mui/material'
import React from 'react'

export default function Chat() {
	return (
		<Box>
			<Box
				sx={{
					width: 300,
					height: 300,
					backgroundColor: 'primary.dark',
					'&:hover': {
						backgroundColor: 'primary.main',
						opacity: [0.9, 0.8, 0.7],
					},
				}}
			></Box>
			<TextField
				id="outlined-basic"
				variant="outlined"
				placeholder="Отправить сообщеение"
				autoFocus
				autoComplete="off"
			/>
		</Box>
	)
}
