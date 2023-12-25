import { ErrorBoundary } from '../shared/HOC/ErrorBoundary/ErrorBoundary'
import MainRoutes from './routes/MainRoutes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../shared/Redux/store'
import Cursor from '../ui/Cursor/Cursor'
import { Loader } from 'radio-app-uikit'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

function App(): JSX.Element {
	return (
		<>
			<Cursor />
			<ErrorBoundary>
				<Suspense fallback={<Loader />}>
					<Provider store={store}>
						<BrowserRouter>
							<MainRoutes />
						</BrowserRouter>
					</Provider>
				</Suspense>
			</ErrorBoundary>
		</>
	)
}

export default App
