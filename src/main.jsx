import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './Upside/App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
