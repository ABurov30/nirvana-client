import { createRoot } from 'react-dom/client'
import '../public/styles/style.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './app/App'
import React from 'react'
import './i18n'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(<App />)
