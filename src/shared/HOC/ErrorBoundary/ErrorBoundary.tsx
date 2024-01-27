import React from 'react'

import ErrorPage from '../../../pages/ErrorPage/ErrorPage'

import { IErrorWithCode, IProps, IState } from './types'

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
			return <ErrorPage />
		}
		return this.props.children
	}
}
