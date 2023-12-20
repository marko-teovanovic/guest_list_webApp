import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import CreatePage from '../components/CreatePage'
import AllListPage from '../components/AllListPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/all" element={<AllListPage />} />
    </Routes>
  )
}

export default AppRoutes
