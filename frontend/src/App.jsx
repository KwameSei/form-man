import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, FormDisplay } from './components';
import './App.css'

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form-display' element={<FormDisplay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
