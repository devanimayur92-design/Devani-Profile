import React from 'react'
import Nav from './components/Nav'
import Coder from './components/Coder'
import './App.css' // Put main and footer styles here

const App = () => {
  return (
    <>
      <Nav />
      <main className="main-content">
        <Coder />
        
        <footer className="footer-section">
          <h2>Thank you for looking!</h2>
          <div className='footer-contact'>
            <p><strong>Contact Number:</strong> +919157764644</p>
            <p><strong>Email:</strong> devanimayur92@gmail.com</p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App