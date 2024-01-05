import * as React from 'react'
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
	return (
		<FormControl variant="standard" sx={{ minWidth: 100, width: '40%' }}>
			<InputLabel id="demo-simple-select-standard-label">
				{label}
			</InputLabel>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={value}
				onChange={e => dispatch(onChange(e.target.value))}
				label={label}
				name={label}
			>
				{options.map(option => {
					return (
						<MenuItem value={option.value}>{option.label}</MenuItem>
					)
				})}
			</Select>
		</FormControl>
	)
}
