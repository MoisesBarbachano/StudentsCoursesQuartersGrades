import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../src/components/App'
 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/*" element={<App />} exact />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})