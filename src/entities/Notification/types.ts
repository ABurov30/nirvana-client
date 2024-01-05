export interface Notification {
	severity: Severity | ''
	message: string
	isOpen?: boolean
}

export enum Severity {
	error = Severity.error,
	warning = 'warning',
	info = Severity.info,
	success = Severity.success
}
