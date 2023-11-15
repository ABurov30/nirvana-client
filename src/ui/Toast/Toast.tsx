import React, { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ToastProps } from './types'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Toast({ severity, message }: ToastProps) {
	console.log(severity, message, 'in Toast')
	const [open, setOpen] = useState(true)

	const handleClose = (event: Event, reason: string) => {
		if (reason === 'clickaway') {
			setOpen(false)
			return
		}

		setOpen(false)
	}

	let timeoutId: NodeJS.Timeout

	useEffect(() => {
		timeoutId = setTimeout(() => setOpen(false), 5000)
	}, [])

	useEffect(() => {
		clearTimeout(timeoutId)
	}, [severity, message])

	return (
		<>
			{message && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert severity={severity} onClose={handleClose}>
						{message}
					</Alert>
				</Snackbar>
			)}
		</>
	)
}
