import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRouter from '../HOC/PrivateRouter/PrivateRouter'
import { useAppSelector } from '../services/Redux/hooks'
import MainRoutes from './routes/MainRoutes/MainRoutes'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import NAZRouter from './routes/NAZRoutes/NAZRoutes'
import { useCheckUser } from '../hooks/useCheckUser'
import AZRouter from './routes/AZroutes/AZRoutes'
import { store } from '../services/Redux/store'
import React, { Suspense, lazy } from 'react'
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
