import { Autocomplete, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { AutoCompleteProps } from './types'
import React from 'react'

function AutoComplete({ field }: AutoCompleteProps) {
	return (
		<Autocomplete
			freeSolo
			disableClearable
			sx={{ width: '25%' }}
			options={field.options?.map(option => option)}
			renderInput={params => (
				<TextField
					{...params}
					label={field.label}
					name={field.name}
					InputProps={{
						...params.InputProps,
						type: 'search'
					}}
				/>
			)}
		/>
	)
}

export default AutoComplete
