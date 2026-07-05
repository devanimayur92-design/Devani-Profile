import React from 'react'
import Nav from './components/Nav'
import Coder from './components/Coder'

const App = () => {
  return (
    <>
      <Nav />
      {/* Rest of your website content */}
      <main style={{ padding: '3rem 4rem', minHeight: '100vh', background: '#c1d0d8', color: '#000000' }}>
        <Coder />
        <div className='footer'>

        <h2>Thank you for looking..</h2>
        </div>
        <div className='footer'>

        <p>Contect Number : +919157764644</p>
        <p>Email : devanimayur92@gmail.com</p>
        </div>
      </main>
    </>
  )
}

export default App