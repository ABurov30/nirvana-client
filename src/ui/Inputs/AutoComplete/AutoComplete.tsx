import React, { memo } from 'react'

import { Autocomplete, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'

import { AutoCompleteProps } from './types'

import { useAppDispatch } from '../../../shared/Redux/hooks'
import { request } from '../../../shared/Request/Requets'

import { useDebounce } from './hooks/useDebounce'

export const AutoComplete = memo(function AutoComplete({
	field
}: AutoCompleteProps) {
	const dispatch = useAppDispatch()
	useDebounce(field, dispatch)
	return (
		<Autocomplete
			freeSolo
			disableClearable
			sx={{
				width: '25%'
			}}
			options={field?.options?.map(option => option)}
			renderInput={params => (
				<TextField
					{...params}
					label={field?.label}
					name={field?.name}
					required={field?.required}
					value={field?.value}
					key={`${field?.label}${field?.name}`}
					onChange={e => field?.onChange(e.target.value)}
					variant="standard"
					InputProps={{
						...params.InputProps,
						type: 'search'
					}}
				/>
			)}
		/>
	)
})
