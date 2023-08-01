import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import * as React from 'react'
import axios from 'axios'
import { request } from '../services/Request/Requets'
import { useUniqGenre } from '../hooks/useUniqTaqs'

export default function InputGenre(): JSX.Element {
	const genres=useUniqGenre()
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={genres?.map(option => option)}
				renderInput={params => (
					<TextField
						{...params}
						label="Жанр"
						name="tags"
						InputLabelProps={{
							sx: {
								color: '#ff6ec7'
							}
						}}
						InputProps={{
							...params.InputProps,
							type: 'search',
							sx: {
								color: '#ff6ec7',
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: '#ff6ec7'
								},
								'&:hover .MuiOutlinedInput-notchedOutline': {
									borderColor: '#ff6ec7'
								},
								'&.Mui-focused .MuiOutlinedInput-notchedOutline':
									{
										borderColor: '#ff6ec7'
									}
							}
						}}
					/>
				)}
			/>
		</Stack>
	)
}
