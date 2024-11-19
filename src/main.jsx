import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { GlobalEventContext } from './context/GlobalEventContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalEventContext>
      <App />
    </GlobalEventContext>
  </StrictMode>,
)
