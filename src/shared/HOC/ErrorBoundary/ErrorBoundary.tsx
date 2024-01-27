import { Component, ErrorInfo, ReactNode } from 'react'

import ErrorPage from 'pages/ErrorPage/ErrorPage'

import { IProps, IState } from './types'

export class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error: error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error({ Error: error, ErrorInfo: errorInfo })
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return <ErrorPage />
		}
		return this.props.children
	}
}
