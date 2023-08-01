import React from 'react'

interface IProps {
	children: React.ReactNode
}

interface IState {
	hasError: boolean
	error: Error | null
}

interface IErrorWithCode extends Error {
	code: number
}

export class ErrorBoundary extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error: error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error({ Error: error, ErrorInfo: errorInfo })
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			const error = this.state.error as IErrorWithCode
			if (this.state.error instanceof TypeError) {
				return <h1>Something went wrong with type.</h1>
			} else if (this.state.error instanceof ReferenceError) {
				return <h1>Something went wrong with reference.</h1>
			} else {
				return <h1>Something went wrong.</h1>
			}
		}
		return this.props.children
	}
}
