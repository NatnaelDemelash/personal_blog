import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import BlogDetail from './components/BlogDetails';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<HomePage />}/>
        </Routes>
       <Routes>
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
    </Router>
  );
};

export default App;
