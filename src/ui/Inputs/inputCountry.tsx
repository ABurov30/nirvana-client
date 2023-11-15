import { useUniqCountry } from '../../hooks/useUniqCountry'
import { request } from '../../services/Request/Requets'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import * as React from 'react'
import axios from 'axios'

export default function InputCountry(): JSX.Element {
	const countries = useUniqCountry()
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={countries?.map(option => option.label)}
				renderInput={params => (
					<TextField
						{...params}
						label="Country"
						name="country"
						InputProps={{
							...params.InputProps,
							type: 'search'
						}}
					/>
				)}
			/>
		</Stack>
	)
}
