import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'

import { ErrorBoundary } from './HOC/ErrorBoundary/ErrorBoundary'
import { store } from './services/Redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import { Loader } from 'radio-app-uikit'
import { Provider } from 'react-redux'
import '../public/styles/style.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './app/App'
import axios from 'axios'

let rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(<App />)
