import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { Theme } from 'entities/App/types'

import { SelectProps } from './types'

export default function SelectInput({
	label,
	options,
	value,
	onChange,
	dispatch
}: SelectProps) {
	return (
		<FormControl variant="standard" sx={{ minWidth: 100, width: '40%' }}>
			<InputLabel id="demo-simple-select-standard-label">
				{label}
			</InputLabel>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={value}
				defaultValue={value}
				onChange={e =>
					dispatch
						? //@ts-ignore
							dispatch(onChange(e.target.value))
						: onChange(e.target.value as Theme)
				}
				label={label}
				name={label}
			>
				{options.map(option => {
					return (
						<MenuItem value={option.value} key={option.label}>
							{option.label}
						</MenuItem>
					)
				})}
			</Select>
		</FormControl>
	)
}
