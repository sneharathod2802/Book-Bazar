import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Marketplace from './pages/Marketplace';
import BookReader from './pages/BookReader';
import SellBook from './pages/SellBook';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/reader/:bookId" element={<BookReader />} />
            <Route path="/sell" element={<SellBook />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;