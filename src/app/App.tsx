import { ErrorBoundary } from '../HOC/ErrorBoundary/ErrorBoundary'
import MainRoutes from './routes/MainRoutes/MainRoutes'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../services/Redux/store'
import { Loader } from 'radio-app-uikit'
import { Provider } from 'react-redux'

function App(): JSX.Element {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loader />}>
				<Provider store={store}>
					<BrowserRouter>
						<MainRoutes />
					</BrowserRouter>
				</Provider>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
