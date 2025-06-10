import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './pages/Sidebar';
import Hero from './pages/Hero';
import Destination from './pages/Destination';

function App() {
  return (
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
  );
}

export default App;
