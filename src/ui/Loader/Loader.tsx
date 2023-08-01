import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader(): JSX.Element {
	console.log('loading')
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh'
			}}
		>
			<CircularProgress />
		</div>
	)
}
