import { Suspense, useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Loader } from 'nirvana-uikit'

import MainRoutes from './routes/MainRoutes/MainRoutes'

import { ErrorBoundary } from 'shared/HOC/ErrorBoundary/ErrorBoundary'
import { store } from 'shared/Redux/store'
import Cursor from 'shared/UI/Cursor/Cursor'

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
