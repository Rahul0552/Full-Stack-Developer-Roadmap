import React from 'react'
import './style.css'
import Header from './Components/Header'
import Footer from './Components/footer'
import Article from './Components/Article'
import Nav from './Components/Nav'
import Ads from './Components/Ads'

const App = () => {
  return (
    <div className='grid-container'>
      <Header />
      <Nav />
      <Article />
      <Ads />
      <Footer />
    </div>
  )
}

export default App
