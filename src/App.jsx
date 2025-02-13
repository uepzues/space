import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Destination from './components/Destination'
import './App.css'
import Crew from './components/Crew'
import Footer from './components/Footer'
import Technology from './components/Technology'

function App() {
  const [activePage, setActivePage] = useState('')

  useEffect(() => {
    const url = window.location.href
    const page = url.split('/').pop()
    setActivePage(page)
  })

  return (
    <>
      <Navigation activePage={activePage} />
      {activePage === '' && <Home />}
      {activePage === 'Destination' && <Destination />}
      {activePage === 'Crew' && <Crew />}
      {activePage === 'Technology' && <Technology />}

      <Footer />
    </>
  )
}

export default App
