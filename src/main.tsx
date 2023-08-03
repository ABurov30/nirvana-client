import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'

import { ErrorBoundary } from './HOC/ErrorBoundary/ErrorBoundary'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import { Loader } from 'radio-app-uikit'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import '../public/styles/style.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import axios from 'axios'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
	<ErrorBoundary>
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</Suspense>
	</ErrorBoundary>
)
