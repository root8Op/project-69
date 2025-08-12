import React from 'react'
import './App.css'

function App() {
  

  return (
    <div className="Hero bg-[#EFF5E1] w-full h-screen">
     <header className="header flex justify-between items-center p-4 font-[Inter]-serif">
        <h1>skincare</h1>
        <nav className="navbar flex justify-between items-center gap-120">
          <ul className="nav-elements flex justify-between items-center p-2 gap-4">
              <li>All products</li>
              <li>serum</li>
              <li>sunscreen</li>
              <li>bundle</li>
          </ul>
          <ul className="nav-elements flex justify-between items-center">
              <li><img src="#" alt="" /></li>
              <li>cart</li>
              <li></li>
              <li></li>
          </ul>
        </nav>
     </header>
    </div>
  )
}

export default App
