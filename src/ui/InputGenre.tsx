import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'
import { Stack } from '@mui/material'

export default function InputGenre(): JSX.Element {
	const [tags, setTags] = React.useState([])

	React.useEffect(() => {
		axios('/music/uniqTags')
			.then(res => setTags(res.data))
			.catch(e => console.log(e))
	}, [])
	console.log(tags)
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={tags.map(option => option)}
				renderInput={params => (
					<TextField
						{...params}
						label="Жанр"
						name="tags"
						InputLabelProps={{
							sx: {
								color: '#ff6ec7',
							},
						}}
						InputProps={{
							...params.InputProps,
							type: 'search',
							sx: {
								color: '#ff6ec7',
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: '#ff6ec7',
								},
								'&:hover .MuiOutlinedInput-notchedOutline': {
									borderColor: '#ff6ec7',
								},
								'&.Mui-focused .MuiOutlinedInput-notchedOutline':
									{
										borderColor: '#ff6ec7',
									},
							},
						}}
					/>
				)}
			/>
		</Stack>
	)
}
