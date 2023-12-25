import {
	clearNotification,
	setNotification
} from '../../entities/Notification/slice'
import React, { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ToastProps } from './types'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Toast({ notification }: ToastProps) {
	const [open, setOpen] = useState(true)

	const handleClose = (event: Event, reason: string) => {
		if (reason === 'clickaway') {
			setOpen(false)
			clearNotification()
			return
		}
		clearNotification()
		setOpen(false)
	}

	useEffect(() => {
		setOpen(true)
	}, [notification.message, notification.severity])

	return (
		<>
			{notification.message && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						severity={notification.severity}
						onClose={handleClose}
					>
						{notification.message}
					</Alert>
				</Snackbar>
			)}
		</>
	)
}
