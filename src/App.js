import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './pages/Sidebar';
import Hero from './pages/Hero';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import './styles/responsive.css';

function App() {
  return (
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
  );
}

export default App;
