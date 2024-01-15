export interface Notification {
	severity: Severity | ''
	message: string
	isOpen?: boolean
}

export enum Severity {
	error = 'error',
	warning = 'warning',
	info = 'info',
	success = 'success'
}
