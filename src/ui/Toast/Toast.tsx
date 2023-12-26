import { clearNotification, setIsOpen } from '../../entities/Notification/slice'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ToastProps } from './types'
import Fade from '@mui/material/Fade'
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hooks'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Toast({ notification }: ToastProps) {
	const { isOpen } = useAppSelector(state => state.notification)
	const dispatch = useAppDispatch()

	const handleClose = () => {
		dispatch(clearNotification())
	}

	useEffect(() => {
		dispatch(setIsOpen(true))
	}, [notification.message, notification.severity])

	useEffect(() => {
		return () => {
			dispatch(clearNotification())
		}
	}, [])

	return (
		<>
			<Snackbar
				open={isOpen}
				autoHideDuration={5000}
				TransitionComponent={Fade}
				onClose={handleClose}
			>
				<Alert severity={notification.severity} onClose={handleClose}>
					{notification.message}
				</Alert>
			</Snackbar>
		</>
	)
}
