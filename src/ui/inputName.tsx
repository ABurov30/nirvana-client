import Autocomplete from '@mui/material/Autocomplete'
import { useUniqName } from '../hooks/useUniqName'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import * as React from 'react'

export default function InputName(): JSX.Element {
	const names = useUniqName()
	console.log('=========', names)
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={names?.map(option => option.name)}
				renderInput={params => (
					<TextField
						{...params}
						label="Название"
						name="name"
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
