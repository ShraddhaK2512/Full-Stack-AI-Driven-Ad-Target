//import { useState } from 'react'
import NavBar from './components/NavBar';

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ProductSearch from './pages/ProductSearch';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/product-search" element={<ProductSearch />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;
