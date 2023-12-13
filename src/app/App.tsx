import { ErrorBoundary } from '../HOC/ErrorBoundary/ErrorBoundary'
import MainRoutes from './routes/MainRoutes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../services/Redux/store'
import Cursor from '../ui/Cursor/Cursor'
import { Loader } from 'radio-app-uikit'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

function App(): JSX.Element {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loader />}>
				<Provider store={store}>
					<BrowserRouter>
						<Cursor />
						<MainRoutes />
					</BrowserRouter>
				</Provider>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
