import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Loader } from 'nirvana-uikit'

import './i18n'
import MainRoutes from './routes/MainRoutes'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { ErrorBoundary } from 'shared/HOC/ErrorBoundary/ErrorBoundary'
import { store } from 'shared/Redux/store'
import Cursor from 'shared/UI/Cursor/Cursor'

import '../../public/styles/style.css'

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
