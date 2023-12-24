export interface IProps {
	children: React.ReactNode
}

export interface IState {
	hasError: boolean
	error: Error | null
}

export interface IErrorWithCode extends Error {
	code: number
}
