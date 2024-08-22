import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import MuseumHomePage from './MuseumHomePage/MuseumHomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MuseumHomePage />
  </StrictMode>,
)
