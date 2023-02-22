import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import App from './App'
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import '@/styles/reset.scss'
import '@/styles/common.scss'

import en_US from './locales/en_US'

const messages = {
  en: en_US,
}

const lang = localStorage.getItem('lang') || 'en'
const message = messages[lang as keyof typeof messages]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale={lang} messages={message}>
      <App />
    </IntlProvider>
  </React.StrictMode>
)
