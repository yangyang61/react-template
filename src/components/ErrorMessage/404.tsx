import React from 'react'
import { Button, ResultPage } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate(HOME_URL)
  }
  return (
    <ResultPage
      status="success"
      title="操作成功"
      description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
    />
  )
}

export default NotFound
