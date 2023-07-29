import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'
import '../public/styles/style.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
console.log('---------------')

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

axios.defaults.baseURL = 'http://localhost:3001/api'
axios.defaults.withCredentials = true

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
