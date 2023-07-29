import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'
import { Stack } from '@mui/material'

export default function InputCountry(): JSX.Element {
	const [countries, setCounties] = React.useState([])
	React.useEffect(() => {
		axios('/music/uniqCountry')
			.then(res => setCounties(res.data))
			.catch(e => console.log(e))
	}, [])
	console.log(countries)
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={countries.map(option => option.label)}
				renderInput={params => (
					<TextField
						{...params}
						label="Страна"
						name="country"
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
