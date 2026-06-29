import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App'
import './index.css'

const basePath = import.meta.env.BASE_URL || '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={basePath}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
