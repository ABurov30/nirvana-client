export interface ToastProps {
	notification: {
		severity: 'error' | 'warning' | 'info' | 'success' | ''
		message: string
	}
}
