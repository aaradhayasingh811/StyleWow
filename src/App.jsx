import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import AuthForms from './components/AuthForms'
import FashionQuizForm from './components/FashionQuizForm'
import UserDashboard from './pages/UserDashbaord'
import ForgotPassword from './components/ForgotPassword'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthForms />} />
          <Route path="/quiz" element={<FashionQuizForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          

        </Routes>
      </Router>

    
    
      
    </>
  )
}

export default App
