import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToggleProvider } from './contexts/ToggleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToggleProvider>
    <App />
  </ToggleProvider>
    
 
)
