import React from 'react'
import Router from '@/routers/index'
import { useVcosole } from './hooks/useVconsole'
import { BrowserRouter } from 'react-router-dom'
import FooterBar from './components/FooterBar'
// 这个是全局的页面 还可以做一些其他的操作

export default function App() {
  useVcosole()
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH as string}>
      <div className="content">
        <Router />
      </div>
      <FooterBar />
    </BrowserRouter>
  )
}
