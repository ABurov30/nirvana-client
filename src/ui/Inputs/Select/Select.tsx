import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { SelectProps } from './types'

export default function SelectInput({
	label,
	options,
	value,
	onChange,
	dispatch
}: SelectProps) {
	const [defaultValue, _] = useState(value)
	return (
		<FormControl variant="standard" sx={{ minWidth: 100, width: '40%' }}>
			<InputLabel id="demo-simple-select-standard-label">
				{label}
			</InputLabel>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={value}
				defaultValue={defaultValue}
				onChange={e =>
					dispatch
						? dispatch(onChange(e.target.value))
						: onChange(e.target.value)
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
