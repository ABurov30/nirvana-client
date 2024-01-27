import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App'
import './i18n'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '../public/styles/style.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(<App />)
