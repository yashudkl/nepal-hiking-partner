import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../pages/Home'
import TrekList from '../pages/TrekList'
import Trek from '../pages/Trek'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#081422', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trek" element={<TrekList />} />
            <Route path="/trek/:id" element={<Trek />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
